import { Calendar, Star, Users } from "lucide-react";
import { mentors } from "../data/mockData";

interface CoachingSectionProps {
  onBookingClick: () => void;
}

export function CoachingSection({ onBookingClick }: CoachingSectionProps) {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: '#F7F7FA' }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2
            className="mb-2"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2B2E4A',
            }}
          >
            Coaching & Mentoring
          </h2>
          <p style={{ color: '#717182' }}>
            Ricevi supporto personalizzato da esperti nel trasformare sfide in crescita
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card Prenota Sessione */}
          <div
            className="rounded-xl overflow-hidden relative"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              backgroundImage: 'url(https://images.unsplash.com/photo-1759156771079-6fef5b8d66c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwdG9wJTIwdmlldyUyMGZsYXRsYXklMjBsYXB0b3AlMjBub3RlYm9vayUyMGFnZW5kYSUyMG9mZmljZSUyMG92ZXJoZWFkfGVufDF8fHx8MTc4MTY1MjgyMHww&ixlib=rb-4.1.0&q=80&w=1080)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(43,46,74,0.88) 0%, rgba(46,196,182,0.75) 100%)',
              }}
            />
            {/* Content wrapper above overlay */}
            <div className="relative p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10">
              <Calendar className="h-7 w-7 text-white" />
            </div>
            <h3
              className="mb-3"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              Prenota una sessione
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Affronta le tue sfide con il supporto di un coach professionista.
              Sessioni 1-on-1 personalizzate per il tuo percorso.
            </p>
            <button
              onClick={onBookingClick}
              className="w-full rounded-lg py-3 transition-all hover:brightness-110"
              style={{
                backgroundColor: '#2EC4B6',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              Vedi disponibilità
            </button>
            </div>
          </div>

          {/* Card Trova Mentor */}
          <div
            className="rounded-xl bg-white p-8"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-lg"
                style={{ backgroundColor: '#2EC4B6' }}
              >
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2B2E4A',
                }}
              >
                Trova un mentor
              </h3>
            </div>

            <div className="space-y-4">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="group cursor-pointer rounded-lg border-2 border-transparent p-4 transition-all hover:border-[#2EC4B6] hover:bg-[#F7F7FA]"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p style={{ fontWeight: 600, color: '#2B2E4A' }}>
                          {mentor.name}
                        </p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-[#F4B942] text-[#F4B942]" />
                          <span className="text-sm" style={{ fontWeight: 600, color: '#2B2E4A' }}>
                            {mentor.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm" style={{ color: '#717182' }}>
                        {mentor.expertise}
                      </p>
                      <p className="mt-1 text-xs" style={{ color: '#2EC4B6' }}>
                        {mentor.availability}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-6 w-full rounded-lg border-2 py-3 transition-all hover:bg-[#2EC4B6]/5"
              style={{
                borderColor: '#2EC4B6',
                color: '#2EC4B6',
                fontWeight: 600,
              }}
            >
              Esplora tutti i mentor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
