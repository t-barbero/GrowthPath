import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import growthPathLogo from "../../imports/GrowthPath_ideas.png";

export function Footer() {
  return (
    <footer className="px-6 py-12" style={{ backgroundColor: '#2B2E4A' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={growthPathLogo}
                alt="GrowthPath"
                className="h-6 w-auto object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(72%) sepia(50%) saturate(450%) hue-rotate(130deg) brightness(98%)' }}
              />
            </div>
            <p className="mb-4 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Trasforma i tuoi fallimenti in opportunità di crescita con la nostra
              community di supporto.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#2EC4B6';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Piattaforma */}
          <div>
            <h4 className="mb-4 text-white" style={{ fontWeight: 600 }}>
              Piattaforma
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {['Corsi', 'Storie', 'Forum', 'Webinar'].map(item => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-[#2EC4B6]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Supporto */}
          <div>
            <h4 className="mb-4 text-white" style={{ fontWeight: 600 }}>
              Supporto
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {['Centro aiuto', 'FAQ', 'Contattaci'].map(item => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-[#2EC4B6]">{item}</a>
                </li>
              ))}
              <li>
                <a href="#" className="flex items-center gap-2 transition-colors hover:text-[#2EC4B6]">
                  <Mail className="h-4 w-4" />
                  supporto@growthpath.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h4 className="mb-4 text-white" style={{ fontWeight: 600 }}>
              Legale
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {['Privacy Policy', 'Termini di servizio', 'Cookie Policy', "Condizioni d'uso"].map(item => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-[#2EC4B6]">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-8 border-t pt-8 text-center text-sm"
          style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}
        >
          <p>© 2026 GrowthPath. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
