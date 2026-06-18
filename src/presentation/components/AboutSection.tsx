import { Instagram, Mail, Send, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section className="page-section about-section" id="about">
      <SectionHeader eyebrow="Haqqımızda" title="Dərnəyin missiyası" />
      <div className="about-grid">
        <div className="mission-panel">
          <Users size={26} />
          <h3>İrsi görünən, öyrənilən və ziyarət edilən etmək</h3>
          <p>
            Arxeoloji Dərnək Azərbaycan ərazisindəki arxeoloji irsi rəqəmsal xəritə, təhsil modulları və kurasiya
            edilmiş tapıntı kataloqu ilə birləşdirir.
          </p>
          <div className="team-row">
            <span>Sahə tədqiqatçısı</span>
            <span>Muzey kuratoru</span>
            <span>Rəqəmsal xəritəçi</span>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Adınız
            <input placeholder="Ad və soyad" />
          </label>
          <label>
            Email
            <input placeholder="email@example.com" type="email" />
          </label>
          <label>
            Mesaj
            <textarea placeholder="Dərnəyə yazın" rows={4} />
          </label>
          <button type="button"><Send size={17} /> Göndər</button>
          <div className="social-row">
            <a href="mailto:info@arxeoloji-dernek.az"><Mail size={17} /> Email</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
          </div>
        </form>
      </div>
    </section>
  );
}
