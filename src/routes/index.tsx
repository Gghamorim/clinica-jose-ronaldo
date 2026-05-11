import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Specialties } from "@/components/site/Specialties";
import { Soroterapia } from "@/components/site/Soroterapia";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clínica Dr. José Ronaldo | Endocrinologia, Soroterapia, Odontologia e Podologia" },
      {
        name: "description",
        content:
          "Clínica médica premium em São Bento do Sul/SC. Endocrinologia, soroterapia, odontologia e podologia com atendimento humanizado e estrutura moderna.",
      },
      {
        name: "keywords",
        content:
          "clínica São Bento do Sul, endocrinologia, soroterapia, odontologia, podologia, Dr. José Ronaldo",
      },
      { property: "og:title", content: "Clínica Dr. José Ronaldo · Saúde Premium em São Bento do Sul" },
      {
        property: "og:description",
        content: "Transformando saúde, autoestima e qualidade de vida com atendimento médico de excelência.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Soroterapia />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
