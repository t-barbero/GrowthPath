import { GraduationCap, PenLine } from "lucide-react";

interface HeroSectionProps {
  onShareStoryClick: () => void;
}

const OFFICE_IMAGE = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZSUyMGNvbGxhYm9yYXRpb24lMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwcGVvcGxlJTIwdGFsa2luZ3xlbnwxfHx8fDE3ODEwMTk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function HeroSection({ onShareStoryClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '580px' }}>

      {/* Foto destra — occupa tutta la sezione */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${OFFICE_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      {/* Gradiente fluido sinistra → destra: #2B2E4A pieno → #2EC4B6 → trasparente */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #2B2E4A 0%, #2B2E4A 30%, #2EC4B6 55%, transparent 75%)',
          opacity: 0.92,
        }}
      />

      {/* Secondo layer: ulteriore sfumatura solo sul bordo destro del colore per ammorbidirlo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, transparent 40%, rgba(46,196,182,0.25) 58%, transparent 75%)',
        }}
      />

      {/* Contenuto */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div style={{ maxWidth: '520px' }}>
          <h1
            className="mb-5"
            style={{
              fontSize: '3.25rem',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Ogni errore è<br />un'opportunità
          </h1>

          <p
            className="mb-10"
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
            }}
          >
            GrowthPath è più di una piattaforma di formazione: è una community dove potrai
            condividere esperienze, imparare dagli altri e superare i tuoi blocchi per dare
            una svolta alla tua carriera.
          </p>

          <div className="flex flex-col gap-4" style={{ width: 'fit-content' }}>
            <button
              className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 transition-all hover:brightness-110 hover:shadow-xl whitespace-nowrap w-full"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#2B2E4A',
                fontWeight: 600,
              }}
            >
              <GraduationCap className="h-5 w-5 shrink-0" />
              Inizia un nuovo corso
            </button>

            <button
              onClick={onShareStoryClick}
              className="flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 transition-all hover:bg-white/10 whitespace-nowrap w-full"
              style={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              <PenLine className="h-5 w-5 shrink-0" />
              Racconta un insuccesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
