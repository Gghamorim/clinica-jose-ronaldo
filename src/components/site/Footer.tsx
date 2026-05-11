import { MapPin, Phone, Instagram, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display font-bold">
              JR
            </span>
            <div>
              <p className="font-display text-sm tracking-[0.25em] text-gold">CLÍNICA</p>
              <p className="font-display text-lg font-semibold">Dr. José Ronaldo</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Saúde, autoestima e bem-estar em um só lugar.
            Atendimento médico premium no centro de São Bento do Sul.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://www.instagram.com/clinicadrjoseronaldo?igsh=MXJhNWNmYXpmMnR6Mw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full gold-border text-gold hover:bg-gold/10 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="mailto:contato@clinicadrjoseronaldo.com.br" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full gold-border text-gold hover:bg-gold/10 transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-5 text-sm">
          <h3 className="font-display text-lg text-gold">Contato</h3>
          <div className="flex gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <p>Rua Guilherme Weihermann, 76 — Centro<br />São Bento do Sul / SC</p>
          </div>
          <a href="tel:+5547991957408" className="flex gap-3 text-muted-foreground hover:text-gold transition-colors">
            <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <span>(47) 3633-7076</span>
          </a>
          <div className="flex gap-3 text-muted-foreground">
            <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <p>Segunda a Sexta · 08h às 19h<br />Sábado · 08h às 12h</p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">Localização</h3>
          <div className="mt-5 overflow-hidden rounded-2xl gold-border">
            <iframe
              title="Mapa da Clínica Dr. José Ronaldo"
              src="https://www.google.com/maps?q=Rua+Guilherme+Weihermann,+76,+Centro,+S%C3%A3o+Bento+do+Sul,+SC&output=embed"
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Clínica Dr. José Ronaldo. Todos os direitos reservados.</p>
          <p>São Bento do Sul · SC</p>
        </div>
      </div>
    </footer>
  );
}
