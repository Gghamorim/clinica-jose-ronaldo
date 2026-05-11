import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-gold/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative">
        <div className="relative mx-auto max-w-4xl rounded-3xl gold-border glass p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 bg-gold/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 bg-gold/20 blur-3xl rounded-full" />

          <span className="relative text-xs uppercase tracking-[0.4em] text-gold">Agende sua consulta</span>
          <h2 className="relative mt-6 font-display text-3xl md:text-5xl font-semibold leading-tight">
            Cuide da sua saúde com quem entende de <span className="text-gradient-gold italic">excelência</span>.
          </h2>
          <p className="relative mt-5 text-muted-foreground max-w-xl mx-auto">
            Atendimento personalizado, ambiente premium e resultados que transformam.
            Estamos prontos para receber você.
          </p>
          <a
            href="https://wa.me/5547991957408?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-9 py-4 text-base font-medium text-primary-foreground shimmer hover-lift"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
