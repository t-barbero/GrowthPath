import { Menu, User, LogOut, Settings } from "lucide-react";
import growthPathLogo from "../../imports/GrowthPath_ideas.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { currentUser } from "../data/mockData";

interface HeaderProps {
  onShareStoryClick: () => void;
}

export function Header({ onShareStoryClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={growthPathLogo} alt="GrowthPath" className="h-8 w-auto object-contain" />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#" className="transition-colors hover:text-[#2EC4B6]" style={{ color: '#2B2E4A' }}>
              Home
            </a>
            <a href="#" className="transition-colors hover:text-[#2EC4B6]" style={{ color: '#717182' }}>
              Storie
            </a>
            <a href="#" className="transition-colors hover:text-[#2EC4B6]" style={{ color: '#717182' }}>
              Forum
            </a>
            <a href="#" className="transition-colors hover:text-[#2EC4B6]" style={{ color: '#717182' }}>
              Coaching
            </a>
            <a href="#" className="transition-colors hover:text-[#2EC4B6]" style={{ color: '#717182' }}>
              Webinar
            </a>
            <a href="#" className="transition-colors hover:text-[#2EC4B6]" style={{ color: '#717182' }}>
              Badge
            </a>
          </nav>

          {/* CTA & User */}
          <div className="flex items-center gap-4">
            <button
              onClick={onShareStoryClick}
              className="hidden lg:block rounded-lg px-6 py-2.5 text-white transition-all hover:brightness-110 hover:shadow-lg"
              style={{ backgroundColor: '#2B2E4A' }}
            >
              Condividi la tua storia
            </button>

            {/* User Avatar Dropdown */}
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
                  <p style={{ fontWeight: 600, color: '#2B2E4A' }}>
                    {currentUser.name}
                  </p>
                  <p className="text-sm" style={{ color: '#717182' }}>
                    Membro attivo
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profilo
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Impostazioni
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Esci
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2" style={{ color: '#2B2E4A' }}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
