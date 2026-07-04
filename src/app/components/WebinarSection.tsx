import { useState, useEffect } from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { webinars, type Webinar } from "../data/mockData";
import { WebinarConfirmationModal } from "./WebinarConfirmationModal";

export function WebinarSection() {
  const [countdown, setCountdown] = useState("");
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const nextWebinar = webinars.find((w) => w.isUpcoming);
      if (!nextWebinar) return;

      const eventDate = new Date(`${nextWebinar.date}T${nextWebinar.time}`);
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown("Inizia ora!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      if (days > 0) {
        setCountdown(`${days}g ${hours}h ${minutes}m`);
      } else if (hours > 0) {
        setCountdown(`${hours}h ${minutes}m`);
      } else {
        setCountdown(`${minutes} minuti`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Aggiorna ogni minuto

    return () => clearInterval(interval);
  }, []);

  const upcomingWebinar = webinars.find((w) => w.isUpcoming);
  const futureWebinars = webinars.filter((w) => !w.isUpcoming).slice(0, 2);

  const handleRegister = (webinar: Webinar) => {
    setSelectedWebinar(webinar);
    setIsConfirmationOpen(true);
  };

  return (
    <section className="px-6 py-16">
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
            Webinar & Sessioni Live
          </h2>
          <p style={{ color: '#717182' }}>
            Impara dagli esperti che hanno trasformato i loro errori in successi straordinari
          </p>
        </div>

        {/* Prossimo Webinar */}
        {upcomingWebinar && (
          <div
            className="mb-8 overflow-hidden rounded-xl bg-white"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div className="grid lg:grid-cols-2">
              <div
                className="relative h-64 bg-cover bg-center lg:h-auto"
                style={{
                  backgroundImage: `linear-gradient(rgba(43, 46, 74, 0.3), rgba(43, 46, 74, 0.3)), url(${upcomingWebinar.image})`,
                }}
              >
                <div className="absolute left-6 top-6">
                  <span
                    className="inline-block rounded-full px-4 py-2 text-sm backdrop-blur-sm"
                    style={{
                      backgroundColor: '#FF6B6B',
                      color: '#FFFFFF',
                      fontWeight: 600,
                    }}
                  >
                    🔴 PROSSIMO EVENTO
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div
                  className="mb-4 inline-block rounded-lg px-4 py-2"
                  style={{
                    backgroundColor: '#FEF3C7',
                    color: '#92400E',
                    fontWeight: 600,
                  }}
                >
                  ⏰ Tra {countdown}
                </div>

                <h3
                  className="mb-4"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#2B2E4A',
                    lineHeight: 1.3,
                  }}
                >
                  {upcomingWebinar.title}
                </h3>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3" style={{ color: '#717182' }}>
                    <Calendar className="h-5 w-5" />
                    <span>
                      {new Date(upcomingWebinar.date).toLocaleDateString('it-IT', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: '#717182' }}>
                    <Clock className="h-5 w-5" />
                    <span>{upcomingWebinar.time}</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: '#717182' }}>
                    <User className="h-5 w-5" />
                    <span>{upcomingWebinar.speaker}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleRegister(upcomingWebinar)}
                  className="w-full rounded-lg py-3 transition-all hover:brightness-110"
                  style={{
                    backgroundColor: '#FF6B6B',
                    color: '#FFFFFF',
                    fontWeight: 600,
                  }}
                >
                  Iscriviti ora
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Webinar Futuri */}
        <div className="grid gap-6 md:grid-cols-2">
          {futureWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white transition-all hover:-translate-y-1"
              style={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(43, 46, 74, 0.2), rgba(43, 46, 74, 0.2)), url(${webinar.image})`,
                }}
              />
              <div className="p-6">
                <h4
                  className="mb-3 group-hover:text-[#2EC4B6]"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#2B2E4A',
                    transition: 'color 0.2s',
                  }}
                >
                  {webinar.title}
                </h4>
                <div className="mb-4 space-y-2 text-sm" style={{ color: '#717182' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(webinar.date).toLocaleDateString('it-IT', {
                        day: 'numeric',
                        month: 'long',
                      })}
                    </span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{webinar.speaker}</span>
                  </div>
                </div>
                <button
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: '#2EC4B6', fontWeight: 600 }}
                >
                  Maggiori info
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WebinarConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        webinar={selectedWebinar}
      />
    </section>
  );
}