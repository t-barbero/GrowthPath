import { MessageCircle, ArrowRight } from "lucide-react";
import { stories } from "../data/mockData";

export function StoriesSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: '#F7F7FA' }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2
              className="mb-2"
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#2B2E4A',
              }}
            >
              Storie di crescita
            </h2>
            <p style={{ color: '#717182' }}>
              Esperienze autentiche di chi ha trasformato i fallimenti in successo
            </p>
          </div>
          <button
            className="hidden items-center gap-2 transition-colors lg:flex"
            style={{ color: '#2EC4B6', fontWeight: 600 }}
          >
            Esplora tutte le storie
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group cursor-pointer rounded-xl bg-white p-6 transition-all hover:-translate-y-1"
              style={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={story.avatar}
                  alt={story.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p style={{ fontWeight: 600, color: '#2B2E4A' }}>
                    {story.author}
                  </p>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs"
                    style={{
                      backgroundColor: '#2EC4B6',
                      color: '#FFFFFF',
                      fontWeight: 600,
                    }}
                  >
                    {story.category}
                  </span>
                </div>
              </div>

              <h3
                className="mb-3 group-hover:text-[#2EC4B6]"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#2B2E4A',
                  transition: 'color 0.2s',
                }}
              >
                {story.title}
              </h3>

              <p
                className="mb-4 line-clamp-3"
                style={{ color: '#717182', lineHeight: 1.6 }}
              >
                {story.preview}
              </p>

              <div className="flex items-center gap-2" style={{ color: '#717182' }}>
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">{story.comments} commenti</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 py-3 transition-all hover:bg-[#2EC4B6]/5 lg:hidden"
          style={{
            borderColor: '#2EC4B6',
            color: '#2EC4B6',
            fontWeight: 600,
          }}
        >
          Esplora tutte le storie
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
