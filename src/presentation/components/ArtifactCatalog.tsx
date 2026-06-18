import { Heart, PackageSearch } from "lucide-react";
import { useMemo, useState } from "react";
import type { Artifact } from "../../domain/types";
import { SectionHeader } from "./SectionHeader";

interface ArtifactCatalogProps {
  artifacts: Artifact[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

export function ArtifactCatalog({ artifacts, favorites, onToggleFavorite }: ArtifactCatalogProps) {
  const [category, setCategory] = useState("Hamısı");
  const categories = ["Hamısı", ...Array.from(new Set(artifacts.map((artifact) => artifact.category)))];
  const filtered = useMemo(() => artifacts.filter((artifact) => category === "Hamısı" || artifact.category === category), [artifacts, category]);

  return (
    <section className="page-section" id="artifacts">
      <SectionHeader
        eyebrow="Tapıntılar bazası"
        title="Material mədəniyyət kataloqu"
        description="Silahlar, keramika, sikkələr, bəzək əşyaları və alətlər üzrə kurasiya edilmiş baza."
        action={
          <div className="segmented">
            {categories.map((item) => (
              <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)} type="button">
                {item}
              </button>
            ))}
          </div>
        }
      />
      <div className="artifact-grid">
        {filtered.map((artifact) => (
          <article className="feature-card artifact-card" key={artifact.id}>
            <img src={artifact.image} alt={artifact.name} />
            <button className={`favorite ${favorites.includes(artifact.id) ? "active" : ""}`} onClick={() => onToggleFavorite(artifact.id)} type="button" aria-label="Favoritə əlavə et">
              <Heart size={18} fill={favorites.includes(artifact.id) ? "currentColor" : "none"} />
            </button>
            <div className="card-body">
              <span className="pill"><PackageSearch size={14} /> {artifact.category}</span>
              <h3>{artifact.name}</h3>
              <p>{artifact.explanation}</p>
              <div className="artifact-specs">
                <span>Yer: <strong>{artifact.foundAt}</strong></span>
                <span>Dövr: <strong>{artifact.era}</strong></span>
                <span>Material: <strong>{artifact.material}</strong></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
