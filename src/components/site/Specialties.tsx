import { Activity, Droplets, Smile, Footprints } from "lucide-react";

const specialties = [
  {
    icon: Activity,
    title: "Endocrinologia",
    desc: "Diagnóstico e tratamento de distúrbios hormonais, tireoide, diabetes e emagrecimento.",
  },
  {
    icon: Droplets,
    title: "Soroterapia",
    desc: "Protocolos personalizados de vitaminas e minerais para imunidade e disposição.",
  },
  {
    icon: Smile,
    title: "Odontologia",
    desc: "Cuidado completo com sua saúde bucal, estética e funcionalidade do sorriso.",
  },
  {
    icon: Footprints,
    title: "Podologia",
    desc: "Tratamentos especializados para a saúde, conforto e estética dos pés.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="relative py-28 bg-card/40">
      <div className="absolute inset-0 bg-radial-gold opacity-50" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Especialidades</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold">
            Cuidado completo, <span className="text-gradient-gold italic">excelência</span> em cada detalhe.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-8 hover-lift overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-24 w-24 bg-gold/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-background/60 gold-border text-gold group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-6 h-px w-12 bg-gradient-gold group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
