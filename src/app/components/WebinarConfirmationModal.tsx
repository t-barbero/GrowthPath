import { useState } from "react";
import { CheckCircle2, Calendar, Clock, User, Plus, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import type { Webinar } from "../data/mockData";

interface WebinarConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  webinar: Webinar | null;
}

export function WebinarConfirmationModal({
  isOpen,
  onClose,
  webinar,
}: WebinarConfirmationModalProps) {
  const [cancelled, setCancelled] = useState(false);

  if (!webinar) return null;

  const handleAddToGoogleCalendar = () => {
    const eventDate = new Date(`${webinar.date}T${webinar.time}`);
    const formatDateForGoogle = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d{3}/g, "");
    const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);

    const googleCalendarUrl = new URL("https://calendar.google.com/calendar/render");
    googleCalendarUrl.searchParams.append("action", "TEMPLATE");
    googleCalendarUrl.searchParams.append("text", webinar.title);
    googleCalendarUrl.searchParams.append(
      "dates",
      `${formatDateForGoogle(eventDate)}/${formatDateForGoogle(endDate)}`
    );
    googleCalendarUrl.searchParams.append(
      "details",
      `Webinar con ${webinar.speaker}. Evento GrowthPath - Trasforma i fallimenti in opportunità di crescita.`
    );
    googleCalendarUrl.searchParams.append("location", "Online - Link verrà inviato via email");
    window.open(googleCalendarUrl.toString(), "_blank");
  };

  const handleCancel = () => setCancelled(true);

  const handleClose = () => {
    setCancelled(false);
    onClose();
  };

  return (
    <>
      {/* Modal principale — iscrizione confermata */}
      <Dialog open={isOpen && !cancelled} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full p-3" style={{ backgroundColor: "#DCFCE7" }}>
                <CheckCircle2 className="h-12 w-12" style={{ color: "#16A34A" }} />
              </div>
            </div>
            <DialogTitle
              className="text-center"
              style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2B2E4A" }}
            >
              Iscrizione confermata! 🎉
            </DialogTitle>
            <DialogDescription className="text-center" style={{ color: "#717182" }}>
              Ti sei iscritto con successo al webinar. Riceverai un'email di conferma con
              il link per partecipare.
            </DialogDescription>
          </DialogHeader>

          <div
            className="my-4 rounded-xl p-5"
            style={{ backgroundColor: "#F7F7FA", border: "2px solid #E5E7EB" }}
          >
            <h4 className="mb-4" style={{ fontSize: "1.125rem", fontWeight: 600, color: "#2B2E4A" }}>
              {webinar.title}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: "#717182" }}>
                <Calendar className="h-5 w-5" style={{ color: "#2B2E4A" }} />
                <span>
                  {new Date(webinar.date).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "#717182" }}>
                <Clock className="h-5 w-5" style={{ color: "#2B2E4A" }} />
                <span>{webinar.time}</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "#717182" }}>
                <User className="h-5 w-5" style={{ color: "#2B2E4A" }} />
                <span>{webinar.speaker}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToGoogleCalendar}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg py-3 transition-all hover:brightness-110"
            style={{ backgroundColor: "#2EC4B6", color: "#FFFFFF", fontWeight: 600 }}
          >
            <Plus className="h-5 w-5" />
            Aggiungi a Google Calendar
          </button>

          <button
            onClick={handleCancel}
            className="w-full rounded-lg border-2 py-3 transition-all hover:bg-red-50"
            style={{ borderColor: "#FF6B6B", color: "#FF6B6B", fontWeight: 600 }}
          >
            Annulla iscrizione
          </button>
        </DialogContent>
      </Dialog>

      {/* Modal conferma annullamento */}
      <Dialog open={cancelled} onOpenChange={handleClose}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full p-3" style={{ backgroundColor: "#DCFCE7" }}>
                <CheckCircle2 className="h-12 w-12" style={{ color: "#16A34A" }} />
              </div>
            </div>
            <DialogTitle
              className="text-center"
              style={{ fontSize: "1.375rem", fontWeight: 700, color: "#2B2E4A" }}
            >
              Iscrizione al webinar annullata
            </DialogTitle>
            <DialogDescription className="text-center" style={{ color: "#717182" }}>
              La tua iscrizione è stata rimossa con successo. Potrai iscriverti di nuovo
              in qualsiasi momento.
            </DialogDescription>
          </DialogHeader>

          <button
            onClick={handleClose}
            className="mt-4 w-full rounded-lg py-3 transition-all hover:brightness-110"
            style={{ backgroundColor: "#2B2E4A", color: "#FFFFFF", fontWeight: 600 }}
          >
            Chiudi
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
