import { Compass, MapPin, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import type { ArchaeologySite } from "../../domain/types";
import { SectionHeader } from "./SectionHeader";

interface ExcavationExplorerProps {
  sites: ArchaeologySite[];
}

export function ExcavationExplorer({ sites }: ExcavationExplorerProps) {
  const [era, setEra] = useState("Hamısı");
  const [region, setRegion] = useState("Hamısı");
  const [query, setQuery] = useState("");

  const eras = ["Hamısı", ...Array.from(new Set(sites.map((site) => site.era)))];
  const regions = ["Hamısı", ...Array.from(new Set(sites.map((site) => site.region)))];

  const filtered = useMemo(
    () =>
      sites.filter((site) => {
        const matchesEra = era === "Hamısı" || site.era === era;
        const matchesRegion = region === "Hamısı" || site.region === region;
        const matchesQuery = [site.name, site.description, site.region]
          .join(" ")
          .toLocaleLowerCase("az")
          .includes(query.toLocaleLowerCase("az"));
        return matchesEra && matchesRegion && matchesQuery;
      }),
    [era, query, region, sites],
  );

  return (
    <section className="page-section" id="sites">
      <SectionHeader
        eyebrow="Qazıntılar"
        title="Azərbaycanın arxeoloji xəritəsi"
        description="Dövr, region və mətn axtarışı ilə sahələri araşdırın."
      />
      <div className="filter-bar">
        <SlidersHorizontal size={18} />
        <select value={era} onChange={(event) => setEra(event.target.value)}>
          {eras.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={region} onChange={(event) => setRegion(event.target.value)}>
          {regions.map((item) => <option key={item}>{item}</option>)}
        </select>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Qazıntı axtar..." />
      </div>
      <div className="site-grid">
        {filtered.map((site) => (
          <article className="feature-card site-card" key={site.id}>
            <img src={site.images[0]} alt={site.name} />
            <div className="card-body">
              <span className="pill"><Compass size={14} /> {site.era}</span>
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <div className="meta-line"><MapPin size={15} /> {site.region} · {site.latitude.toFixed(3)}, {site.longitude.toFixed(3)}</div>
              <div className="tag-row">
                {site.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
