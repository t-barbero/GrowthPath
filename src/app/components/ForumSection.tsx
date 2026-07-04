import { useState } from "react";
import { MessageSquare, TrendingUp } from "lucide-react";
import { forumThreads } from "../data/mockData";

export function ForumSection() {
  const [filter, setFilter] = useState<"recent" | "discussed" | "unanswered">("recent");

  const filterLabels = {
    recent: "Più recenti",
    discussed: "Più discussi",
    unanswered: "Senza risposta",
  };

  // Funzione per filtrare e ordinare i thread
  const getFilteredThreads = () => {
    let threads = [...forumThreads];

    switch (filter) {
      case "recent":
        // Ordina per timestamp (più recenti prima)
        // Converti timestamp in valori numerici per ordinare
        return threads.sort((a, b) => {
          const getMinutes = (timestamp: string) => {
            if (timestamp.includes('ore fa')) {
              return parseInt(timestamp) * 60;
            } else if (timestamp.includes('giorno fa') || timestamp.includes('giorni fa')) {
              return parseInt(timestamp) * 24 * 60;
            }
            return 0;
          };
          return getMinutes(a.timestamp) - getMinutes(b.timestamp);
        });

      case "discussed":
        // Ordina per numero di risposte (più discussi prima)
        return threads.sort((a, b) => b.replies - a.replies);

      case "unanswered":
        // Mostra solo thread senza risposta
        return threads.filter(thread => thread.replies === 0);

      default:
        return threads;
    }
  };

  const filteredThreads = getFilteredThreads();

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2
            className="mb-2"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2B2E4A',
            }}
          >
            Forum della community
          </h2>
          <p style={{ color: '#717182' }}>
            Chiedi, condividi, supporta: insieme cresciamo più forti
          </p>
        </div>

        {/* Filtri */}
        <div className="mb-6 flex flex-wrap gap-3">
          {(["recent", "discussed", "unanswered"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="rounded-lg px-4 py-2 transition-all"
              style={{
                backgroundColor: filter === f ? '#2B2E4A' : '#FFFFFF',
                color: filter === f ? '#FFFFFF' : '#2B2E4A',
                border: filter === f ? 'none' : '2px solid #E5E7EB',
                fontWeight: 600,
              }}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>

        {/* Lista Thread */}
        <div className="space-y-4">
          {filteredThreads.map((thread) => (
            <div
              key={thread.id}
              className="group cursor-pointer rounded-xl bg-white p-6 transition-all hover:-translate-y-0.5"
              style={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                borderLeft: thread.isHighlighted ? '4px solid #FF6B6B' : 'none',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs"
                      style={{
                        backgroundColor: '#F7F7FA',
                        color: '#2B2E4A',
                        fontWeight: 600,
                      }}
                    >
                      {thread.category}
                    </span>
                    {thread.isHighlighted && (
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#FF6B6B' }}>
                        <TrendingUp className="h-3 w-3" />
                        Più discusso
                      </span>
                    )}
                  </div>

                  <h3
                    className="mb-2 group-hover:text-[#2EC4B6]"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#2B2E4A',
                      transition: 'color 0.2s',
                    }}
                  >
                    {thread.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm" style={{ color: '#717182' }}>
                    <span>{thread.author}</span>
                    <span>•</span>
                    <span>{thread.timestamp}</span>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 rounded-lg px-4 py-2"
                  style={{
                    backgroundColor: thread.replies === 0 ? '#FEF3C7' : '#DBEAFE',
                    color: thread.replies === 0 ? '#92400E' : '#1E40AF',
                  }}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span style={{ fontWeight: 600 }}>{thread.replies}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-8 w-full rounded-lg py-3 transition-all hover:brightness-95"
          style={{
            backgroundColor: '#2EC4B6',
            color: '#FFFFFF',
            fontWeight: 600,
          }}
        >
          Vai al forum completo
        </button>
      </div>
    </section>
  );
}