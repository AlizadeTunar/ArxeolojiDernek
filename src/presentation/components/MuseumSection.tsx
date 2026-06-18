import { Clock, ExternalLink, Landmark, MapPin } from "lucide-react";
import type { Museum } from "../../domain/types";
import { SectionHeader } from "./SectionHeader";

interface MuseumSectionProps {
  museums: Museum[];
}

export function MuseumSection({ museums }: MuseumSectionProps) {
  return (
    <section className="page-section warm-band" id="museums">
      <SectionHeader
        eyebrow="Muzeylər"
        title="Kolleksiyaların canlı ünvanları"
        description="Arxeoloji fondları, ekspozisiya fokusları və xəritə koordinatları ilə."
      />
      <div className="museum-grid">
        {museums.map((museum) => (
          <article className="feature-card museum-card" key={museum.id}>
            <img src={museum.images[0]} alt={museum.name} />
            <div className="card-body">
              <span className="pill bronze"><Landmark size={14} /> Muzey</span>
              <h3>{museum.name}</h3>
              <p>{museum.description}</p>
              <div className="museum-facts">
                <span><MapPin size={15} /> {museum.address}</span>
                <span><Clock size={15} /> {museum.hours}</span>
              </div>
              <div className="tag-row">
                {museum.collectionFocus.map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${museum.latitude},${museum.longitude}`} target="_blank" rel="noreferrer">
                Xəritədə göstər <ExternalLink size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
