import { ArrowRight, Lock } from "lucide-react";
import { badges, currentUser } from "../data/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Progress } from "./ui/progress";

export function BadgesSection() {
  const unlockedBadges = badges.filter((b) => b.unlocked);

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
            I tuoi progressi
          </h2>
          <p style={{ color: '#717182' }}>
            Celebra ogni passo del tuo percorso di crescita
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Progress Card */}
          <div
            className="rounded-xl bg-white p-8"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#2B2E4A',
                  }}
                >
                  Corso attuale
                </h3>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#2EC4B6',
                  }}
                >
                  {currentUser.progress}%
                </span>
              </div>
              <p className="mb-4" style={{ color: '#717182' }}>
                {currentUser.currentCourse}
              </p>
              <Progress value={currentUser.progress} className="h-3" />
            </div>

            <div className="rounded-lg p-4" style={{ backgroundColor: '#F7F7FA' }}>
              <p className="mb-2 text-sm" style={{ color: '#717182' }}>
                Prossimo traguardo
              </p>
              <p style={{ fontWeight: 600, color: '#2B2E4A' }}>
                Completa altre 2 lezioni per sbloccare il badge "Determinazione"
              </p>
            </div>

            <button
              className="mt-6 w-full rounded-lg py-3 transition-all hover:brightness-95"
              style={{
                backgroundColor: '#2EC4B6',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              Continua il corso
            </button>
          </div>

          {/* Badges Card */}
          <div
            className="rounded-xl bg-white p-8"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#2B2E4A',
                }}
              >
                Badge recenti
              </h3>
              <button
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: '#2EC4B6', fontWeight: 600 }}
              >
                Vedi tutti
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <TooltipProvider>
                {badges.slice(0, 6).map((badge) => (
                  <Tooltip key={badge.id}>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl p-4 transition-all ${
                          badge.unlocked
                            ? 'hover:scale-105'
                            : 'opacity-40 grayscale hover:opacity-60'
                        }`}
                        style={{
                          backgroundColor: badge.unlocked ? '#FEF3C7' : '#F7F7FA',
                        }}
                      >
                        <div className="relative">
                          <span className="text-3xl">{badge.icon}</span>
                          {!badge.unlocked && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Lock className="h-5 w-5" style={{ color: '#717182' }} />
                            </div>
                          )}
                        </div>
                        <p
                          className="text-center text-xs"
                          style={{
                            fontWeight: 600,
                            color: badge.unlocked ? '#92400E' : '#717182',
                          }}
                        >
                          {badge.name}
                        </p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{badge.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>

            <div
              className="mt-6 rounded-lg p-4 text-center"
              style={{ backgroundColor: '#F7F7FA' }}
            >
              <p className="text-sm" style={{ color: '#717182' }}>
                Hai sbloccato <span style={{ fontWeight: 700, color: '#2B2E4A' }}>{unlockedBadges.length}</span> su{' '}
                <span style={{ fontWeight: 700, color: '#2B2E4A' }}>{badges.length}</span> badge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
