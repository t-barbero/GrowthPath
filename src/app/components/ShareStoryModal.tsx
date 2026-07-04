import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ShareStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareStoryModal({ isOpen, onClose }: ShareStoryModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    context: "",
    mistake: "",
    lesson: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logica per salvare la storia
    console.log("Storia inviata:", formData);
    onClose();
    setFormData({
      title: "",
      context: "",
      mistake: "",
      lesson: "",
      category: "",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb:hover]:bg-gray-300">
        <DialogHeader>
          <DialogTitle
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#2B2E4A',
            }}
          >
            Condividi la tua storia
          </DialogTitle>
          <DialogDescription style={{ color: '#717182' }}>
            Aprirsi è il primo passo verso la crescita. Condividi il tuo percorso in totale libertà.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title" style={{ color: '#2B2E4A' }}>
              Titolo della storia *
            </Label>
            <Input
              id="title"
              placeholder="Es. Come ho superato il fallimento della mia startup"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="category" style={{ color: '#2B2E4A' }}>
              Categoria *
            </Label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
              className="mt-2 w-full rounded-lg border border-border bg-input-background px-3 py-2 outline-none focus:ring-2 focus:ring-[#2EC4B6]"
            >
              <option value="">Seleziona una categoria</option>
              <option value="carriera">Carriera</option>
              <option value="imprenditoria">Imprenditoria</option>
              <option value="studio">Studio</option>
              <option value="leadership">Leadership</option>
              <option value="personale">Sviluppo personale</option>
            </select>
          </div>

          <div>
            <Label htmlFor="context" style={{ color: '#2B2E4A' }}>
              Contesto *
            </Label>
            <p className="mb-2 text-sm" style={{ color: '#717182' }}>
              Descrivi la situazione iniziale e cosa stava accadendo
            </p>
            <Textarea
              id="context"
              placeholder="Racconta brevemente il contesto in cui ti trovavi..."
              value={formData.context}
              onChange={(e) =>
                setFormData({ ...formData, context: e.target.value })
              }
              required
              rows={4}
              className="resize-none"
            />
          </div>

          <div>
            <Label htmlFor="mistake" style={{ color: '#2B2E4A' }}>
              L'errore o l'insuccesso *
            </Label>
            <p className="mb-2 text-sm" style={{ color: '#717182' }}>
              Cosa è andato storto? Sii specifico e autentico
            </p>
            <Textarea
              id="mistake"
              placeholder="Descrivi l'errore o il fallimento che hai affrontato..."
              value={formData.mistake}
              onChange={(e) =>
                setFormData({ ...formData, mistake: e.target.value })
              }
              required
              rows={4}
              className="resize-none"
            />
          </div>

          <div>
            <Label htmlFor="lesson" style={{ color: '#2B2E4A' }}>
              Lezione appresa *
            </Label>
            <p className="mb-2 text-sm" style={{ color: '#717182' }}>
              Cosa hai imparato? Come ti ha fatto crescere questa esperienza?
            </p>
            <Textarea
              id="lesson"
              placeholder="Condividi le lezioni che hai imparato e come sei cresciuto..."
              value={formData.lesson}
              onChange={(e) =>
                setFormData({ ...formData, lesson: e.target.value })
              }
              required
              rows={4}
              className="resize-none"
            />
          </div>

          <div
            className="rounded-lg p-4"
            style={{ backgroundColor: '#FEF3C7', borderLeft: '4px solid #F4B942' }}
          >
            <p className="text-sm" style={{ color: '#92400E' }}>
              💡 <strong>Consiglio:</strong> Le storie più potenti sono quelle autentiche. Mostrare vulnerabilità è ciò che ispira davvero gli altri.
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
              className="flex-1 rounded-lg py-3 transition-all hover:brightness-110"
              style={{
                backgroundColor: '#2B2E4A',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              Pubblica storia
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
