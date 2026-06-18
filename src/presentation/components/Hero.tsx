import { ArrowRight, Compass, Landmark, MapPinned, Trophy } from "lucide-react";
import type { Artifact } from "../../domain/types";

interface HeroProps {
  artifact: Artifact;
}

export function Hero({ artifact }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-media" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-kicker">Azərbaycan irsi üçün interaktiv kəşf platforması</span>
          <h1>Arxeoloji Dərnək</h1>
          <p>
            Qazıntı sahələri, muzeylər, tapıntılar, xəritə marşrutları və öyrənmə modulları bir premium təhsil
            təcrübəsində birləşir.
          </p>
          <div className="hero-actions">
            <a href="#map" className="primary-action">
              Xəritəni aç <ArrowRight size={18} />
            </a>
            <a href="#quiz" className="secondary-action">
              Viktorina başla
            </a>
          </div>
        </div>
        <div className="daily-card">
          <span>Günün Tapıntısı</span>
          <img src={artifact.image} alt={artifact.name} />
          <div>
            <strong>{artifact.name}</strong>
            <p>{artifact.era} · {artifact.foundAt} · {artifact.material}</p>
          </div>
        </div>
      </div>
      <nav className="quick-nav" aria-label="Sürətli bölmələr">
        {[
          ["Muzeylər", "#museums", Landmark],
          ["Qazıntılar", "#sites", Compass],
          ["Xəritə", "#map", MapPinned],
          ["Viktorina", "#quiz", Trophy],
        ].map(([label, href, Icon]) => (
          <a key={label as string} href={href as string}>
            <Icon size={20} />
            <span>{label as string}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
