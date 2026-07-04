import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StoriesSection } from "./components/StoriesSection";
import { ForumSection } from "./components/ForumSection";
import { CoachingSection } from "./components/CoachingSection";
import { WebinarSection } from "./components/WebinarSection";
import { BadgesSection } from "./components/BadgesSection";
import { Footer } from "./components/Footer";
import { ShareStoryModal } from "./components/ShareStoryModal";
import { BookingModal } from "./components/BookingModal";

export default function App() {
  const [isShareStoryModalOpen, setIsShareStoryModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header onShareStoryClick={() => setIsShareStoryModalOpen(true)} />
      
      <main>
        <HeroSection onShareStoryClick={() => setIsShareStoryModalOpen(true)} />
        <StoriesSection />
        <ForumSection />
        <CoachingSection onBookingClick={() => setIsBookingModalOpen(true)} />
        <WebinarSection />
        <BadgesSection />
      </main>

      <Footer />

      {/* Modali */}
      <ShareStoryModal
        isOpen={isShareStoryModalOpen}
        onClose={() => setIsShareStoryModalOpen(false)}
      />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
