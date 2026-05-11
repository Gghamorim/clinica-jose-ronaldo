import { MessageCircle } from "lucide-react";

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/5547991957408?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-primary-foreground gold-glow hover-lift animate-gold-pulse"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
