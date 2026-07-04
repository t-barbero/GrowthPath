import { useState } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { mentors } from "../data/mockData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedMentor, setSelectedMentor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prenotazione:", { selectedMentor, selectedDate, selectedTime });
    onClose();
    setSelectedMentor("");
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[92vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader>
          <DialogTitle
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#2B2E4A',
            }}
          >
            Prenota una sessione
          </DialogTitle>
          <DialogDescription style={{ color: '#717182' }}>
            Scegli il tuo coach o mentor e trova il momento perfetto per la tua
            sessione 1-on-1.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="mentor" style={{ color: '#2B2E4A' }}>
              Seleziona coach/mentor *
            </Label>
            <div className="mt-2 space-y-2">
              {mentors.map((mentor) => (
                <label
                  key={mentor.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-3 transition-all ${
                    selectedMentor === mentor.name
                      ? 'border-[#2EC4B6] bg-[#2EC4B6]/5'
                      : 'border-border hover:border-[#2EC4B6]/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="mentor"
                    value={mentor.name}
                    checked={selectedMentor === mentor.name}
                    onChange={(e) => setSelectedMentor(e.target.value)}
                    className="h-4 w-4 accent-[#2EC4B6]"
                  />
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p style={{ fontWeight: 600, color: '#2B2E4A' }}>
                      {mentor.name}
                    </p>
                    <p className="text-sm" style={{ color: '#717182' }}>
                      {mentor.expertise}
                    </p>
                    <p className="mt-1 text-xs" style={{ color: '#2EC4B6' }}>
                      {mentor.availability}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xl">⭐</span>
                    <span style={{ fontWeight: 600, color: '#2B2E4A' }}>
                      {mentor.rating}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="date" style={{ color: '#2B2E4A' }}>
              Seleziona data *
            </Label>
            <div className="relative mt-2">
              <CalendarIcon
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: '#717182' }}
                size={18}
              />
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
                className="w-full rounded-lg border border-border bg-input-background py-2 pl-10 pr-3 outline-none focus:ring-2 focus:ring-[#2EC4B6]"
              />
            </div>
          </div>

          <div>
            <Label style={{ color: '#2B2E4A' }}>Seleziona orario *</Label>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`flex items-center justify-center gap-1 rounded-lg border-2 py-2 text-sm transition-all ${
                    selectedTime === time
                      ? 'border-[#2EC4B6] bg-[#2EC4B6] text-white'
                      : 'border-border hover:border-[#2EC4B6]/50'
                  }`}
                  style={{
                    fontWeight: 600,
                    color: selectedTime === time ? '#FFFFFF' : '#2B2E4A',
                  }}
                >
                  <Clock size={14} />
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-4"
            style={{ backgroundColor: '#DBEAFE' }}
          >
            <p className="text-sm" style={{ color: '#1E40AF' }}>
              ℹ️ Riceverai una email di conferma con il link per la sessione
              video e i dettagli dell'incontro.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border-2 py-3 transition-all hover:bg-gray-50"
              style={{
                borderColor: '#E5E7EB',
                color: '#2B2E4A',
                fontWeight: 600,
              }}
            >
              Annulla
            </button>
            <button
              type="submit"
              disabled={!selectedMentor || !selectedDate || !selectedTime}
              className="flex-1 rounded-lg py-3 transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#2EC4B6',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              Conferma prenotazione
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
