import { LocateFixed, MapPin, Navigation } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArchaeologySite, Museum } from "../../domain/types";
import { SectionHeader } from "./SectionHeader";

declare global {
  interface Window {
    google?: any;
    markerClusterer?: {
      MarkerClusterer: new (options: { map: any; markers: any[] }) => unknown;
    };
  }
}

type MapItem = (ArchaeologySite | Museum) & { mapKind: "site" | "museum" };

interface MapExperienceProps {
  sites: ArchaeologySite[];
  museums: Museum[];
}

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script load failed: ${src}`));
    document.head.appendChild(script);
  });
}

export function MapExperience({ sites, museums }: MapExperienceProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<MapItem | null>(null);
  const [nearby, setNearby] = useState(false);

  const items = useMemo<MapItem[]>(
    () => [...sites.map((item) => ({ ...item, mapKind: "site" as const })), ...museums.map((item) => ({ ...item, mapKind: "museum" as const }))],
    [museums, sites],
  );

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;
    let cancelled = false;

    async function initMap() {
      await loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=az`);
      await loadScript("https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js");
      if (cancelled || !window.google || !mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.38, lng: 47.9 },
        zoom: 7,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: [
          { featureType: "poi", stylers: [{ saturation: -35 }, { lightness: 10 }] },
          { featureType: "water", stylers: [{ color: "#d8e4df" }] },
          { featureType: "landscape", stylers: [{ color: "#f4efe6" }] },
        ],
      });

      const markers = items.map((item) => {
        const marker = new window.google!.maps.Marker({
          position: { lat: item.latitude, lng: item.longitude },
          title: item.name,
          icon: {
            path: window.google!.maps.SymbolPath.CIRCLE,
            scale: item.mapKind === "museum" ? 9 : 8,
            fillColor: item.mapKind === "museum" ? "#8d5d2c" : "#4d3729",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        });
        marker.addListener("click", () => setSelected(item));
        return marker;
      });

      if (window.markerClusterer) {
        new window.markerClusterer.MarkerClusterer({ map, markers });
      } else {
        markers.forEach((marker) => marker.setMap(map));
      }
    }

    initMap().catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [items]);

  const focusNearby = () => {
    setNearby(true);
    navigator.geolocation?.getCurrentPosition(
      () => setSelected(items[0]),
      () => setSelected(items[0]),
      { timeout: 2500 },
    );
  };

  return (
    <section className="page-section map-section" id="map">
      <SectionHeader
        eyebrow="Google Maps"
        title="Məkanları xəritədə kəşf et"
        description="Marker kliklənəndə məlumat paneli açılır, naviqasiya Google Maps marşrutuna yönləndirir."
        action={<button className="utility-button" onClick={focusNearby} type="button"><LocateFixed size={17} /> Mənə yaxın abidələr</button>}
      />
      <div className="map-shell">
        {apiKey ? <div className="google-map" ref={mapRef} /> : <FallbackMap items={items} onSelect={setSelected} nearby={nearby} />}
        <div className={`map-info-panel ${selected ? "visible" : ""}`}>
          {selected ? (
            <>
              <span className="pill bronze"><MapPin size={14} /> {selected.mapKind === "museum" ? "Muzey" : "Arxeoloji məkan"}</span>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <a className="primary-action compact" href={`https://www.google.com/maps/dir/?api=1&destination=${selected.latitude},${selected.longitude}`} target="_blank" rel="noreferrer">
                Naviqasiya et <Navigation size={16} />
              </a>
            </>
          ) : (
            <>
              <span className="pill">Seçim</span>
              <h3>Marker seçin</h3>
              <p>Qazıntı və muzey markerləri üzrə detal paneli burada açılacaq.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function FallbackMap({ items, onSelect, nearby }: { items: MapItem[]; onSelect: (item: MapItem) => void; nearby: boolean }) {
  return (
    <div className="fallback-map">
      <div className="azerbaijan-shape">
        {items.map((item, index) => (
          <button
            key={`${item.mapKind}-${item.id}`}
            className={`map-dot ${item.mapKind} ${nearby && index < 2 ? "nearby" : ""}`}
            style={{ left: `${18 + (index * 13) % 68}%`, top: `${24 + (index * 17) % 48}%` }}
            onClick={() => onSelect(item)}
            type="button"
            aria-label={item.name}
          >
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <p className="map-note">Google Maps üçün `.env` faylında `VITE_GOOGLE_MAPS_API_KEY` əlavə edin.</p>
    </div>
  );
}
