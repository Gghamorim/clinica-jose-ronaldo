import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-gold/10 blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6 items-center relative">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full gold-border px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-gold-pulse" />
            São Bento do Sul · SC
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Transformando <span className="text-gradient-gold italic">saúde</span>,
            autoestima e qualidade de vida.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            Atendimento especializado em endocrinologia, soroterapia, odontologia
            e podologia — com a sofisticação e o cuidado que você merece.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5547991957408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shimmer hover-lift"
            >
              Agendar Consulta no WhatsApp
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center rounded-full gold-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-gold/10 transition-colors"
            >
              Conhecer Especialidades
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <p className="font-display text-2xl text-gold">+15</p>
              <p className="text-xs uppercase tracking-widest">Anos de excelência</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-2xl text-gold">4</p>
              <p className="text-xs uppercase tracking-widest">Especialidades</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-2xl text-gold">5.0</p>
              <p className="text-xs uppercase tracking-widest">Avaliação</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-3xl" />
          <div className="relative overflow-hidden rounded-2xl gold-border gold-glow">
            <img
              src={heroImg}
              alt="Recepção sofisticada da Clínica Dr. José Ronaldo"
              width={1536}
              height={1024}
              loading="eager"
              fetchPriority="high"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Excelência médica</p>
              <p className="mt-1 text-sm text-foreground">
                Estrutura premium no centro de São Bento do Sul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
