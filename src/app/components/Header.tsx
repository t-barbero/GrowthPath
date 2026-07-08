import { useState, useEffect, useCallback } from "react";
import { Menu, X, User, LogOut, Settings } from "lucide-react";
import growthPathLogo from "../../imports/GrowthPath_ideas.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { currentUser } from "../data/mockData";

const NAV_ITEMS = [
  { label: "Home",     id: "home" },
  { label: "Storie",   id: "storie" },
  { label: "Forum",    id: "forum" },
  { label: "Coaching", id: "coaching" },
  { label: "Webinar",  id: "webinar" },
  { label: "Badge",    id: "badge" },
];

interface HeaderProps {
  onShareStoryClick: () => void;
}

export function Header({ onShareStoryClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    // offsetTop è assoluto rispetto al documento, non influenzato dal menu aperto
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollY) current = item.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img src={growthPathLogo} alt="GrowthPath" className="h-8 w-auto object-contain" />
          </div>

          {/* Navigation — Desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm font-medium transition-opacity duration-150 bg-transparent border-none cursor-pointer"
                  style={{
                    color: "#2B2E4A",
                    opacity: isActive ? 1 : 0.5,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = isActive ? "1" : "0.5")}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={onShareStoryClick}
              className="hidden lg:block rounded-lg px-6 py-2.5 text-white transition-all hover:brightness-110 hover:shadow-lg"
              style={{ backgroundColor: "#2B2E4A" }}
            >
              Condividi la tua storia
            </button>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full outline-none ring-2 ring-transparent transition-all hover:ring-[#2EC4B6]/30">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p style={{ fontWeight: 600, color: "#2B2E4A" }}>{currentUser.name}</p>
                  <p className="text-sm" style={{ color: "#717182" }}>Membro attivo</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profilo</DropdownMenuItem>
                <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Impostazioni</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" />Esci</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
              style={{ color: "#2B2E4A" }}
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ borderColor: "#E5E7EB", backgroundColor: "#FFFFFF" }}
        >
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all bg-transparent border-none cursor-pointer"
                  style={{
                    color: "#2B2E4A",
                    opacity: isActive ? 1 : 0.5,
                    backgroundColor: isActive ? "rgba(46,196,182,0.06)" : "transparent",
                  }}
                >
                  {label}
                </button>
              );
            })}

            <div className="mt-3 pt-3" style={{ borderTop: "1px solid #E5E7EB" }}>
              <button
                onClick={() => { onShareStoryClick(); setMobileOpen(false); }}
                className="w-full rounded-lg px-6 py-3 text-white transition-all hover:brightness-110"
                style={{ backgroundColor: "#2B2E4A", fontWeight: 600 }}
              >
                Condividi la tua storia
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
