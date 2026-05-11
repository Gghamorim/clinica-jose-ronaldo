import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Paciente · Endocrinologia",
    text: "Atendimento impecável. Me senti acolhida do começo ao fim e os resultados superaram minhas expectativas.",
    initials: "MS",
  },
  {
    name: "Ricardo A.",
    role: "Paciente · Soroterapia",
    text: "A diferença na disposição é nítida. Estrutura sofisticada e equipe extremamente profissional.",
    initials: "RA",
  },
  {
    name: "Camila P.",
    role: "Paciente · Odontologia",
    text: "Recuperei meu sorriso com toda a delicadeza e tecnologia. Recomendo de olhos fechados.",
    initials: "CP",
  },
  {
    name: "Eduardo M.",
    role: "Paciente · Podologia",
    text: "Cuidado refinado, ambiente premium e profissionais que realmente entendem do que fazem.",
    initials: "EM",
  },
  {
    name: "Júlia F.",
    role: "Paciente · Endocrinologia",
    text: "Dr. José Ronaldo é atencioso e extremamente competente. A clínica é simplesmente linda.",
    initials: "JF",
  },
  {
    name: "André L.",
    role: "Paciente · Soroterapia",
    text: "Protocolo personalizado, resultado real. Voltei a me sentir bem em poucas sessões.",
    initials: "AL",
  },
];

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section id="depoimentos" className="relative py-28 bg-card/40 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Depoimentos</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold">
            A <span className="text-gradient-gold italic">confiança</span> de quem já viveu a experiência.
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-scroll-x w-max">
          {loop.map((t, i) => (
            <article
              key={i}
              className="glass rounded-2xl p-7 w-[360px] shrink-0 hover-lift"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
