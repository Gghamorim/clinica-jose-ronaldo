import { HeartPulse, Sparkles, ShieldCheck, Microscope } from "lucide-react";

const items = [
  { icon: HeartPulse, title: "Atendimento Humanizado", desc: "Escuta atenta e cuidado individual em cada consulta." },
  { icon: Sparkles, title: "Estrutura Moderna", desc: "Ambientes pensados para conforto e tecnologia avançada." },
  { icon: ShieldCheck, title: "Excelência Médica", desc: "Profissionais altamente qualificados e experientes." },
  { icon: Microscope, title: "Tecnologia & Bem-estar", desc: "Protocolos modernos para resultados duradouros." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Sobre a clínica</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
            Um espaço dedicado à <span className="text-gradient-gold italic">sua saúde</span> e ao seu bem-estar.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Localizada no Centro de São Bento do Sul, a Clínica Dr. José Ronaldo une
            estrutura moderna, tecnologia e profissionais especializados para oferecer
            atendimento humanizado com foco em saúde, autoestima e qualidade de vida.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-7 hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
