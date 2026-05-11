import soroImg from "@/assets/soroterapia.jpg";
import { Zap, Shield, Leaf, Sparkles } from "lucide-react";

const benefits = [
  { icon: Zap, label: "Disposição & energia" },
  { icon: Shield, label: "Imunidade fortalecida" },
  { icon: Leaf, label: "Vitaminas & minerais" },
  { icon: Sparkles, label: "Protocolos personalizados" },
];

export function Soroterapia() {
  return (
    <section id="soroterapia" className="relative py-28 overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60 animate-float"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 5)}s`,
            }}
          />
        ))}
      </div>
      {/* Gold lines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-3xl" />
          <div className="relative overflow-hidden rounded-2xl gold-border">
            <img
              src={soroImg}
              alt="Sala de soroterapia premium"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Soroterapia</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
            Energia, imunidade e <span className="text-gradient-gold italic">qualidade de vida</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Protocolos exclusivos de soroterapia desenvolvidos para suas necessidades:
            reposição de vitaminas, minerais e antioxidantes que potencializam a saúde
            de dentro para fora.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 glass rounded-xl p-4 hover-lift">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-gold text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-foreground">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5547991957408"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shimmer hover-lift"
          >
            Saiba mais sobre os protocolos
          </a>
        </div>
      </div>
    </section>
  );
}
