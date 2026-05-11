import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, label: "Sala de procedimentos", w: 1024, h: 768 },
  { src: g2, label: "Consultório odontológico", w: 1024, h: 768 },
  { src: g3, label: "Podologia", w: 1024, h: 768 },
  { src: g4, label: "Nutricionista", w: 1024, h: 768 },
];

export function Gallery() {
  return (
    <section id="estrutura" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Estrutura da clínica</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
            Ambientes pensados para a sua <span className="text-gradient-gold italic">experiência</span>.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl gold-border hover-lift h-[340px]"
            >
              <img
                src={item.src}
                alt={item.label}
                width={item.w}
                height={item.h}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Premium</p>
                <p className="mt-1 font-display text-lg text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
