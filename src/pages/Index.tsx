import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, name: "Da Mario", sector: "Ristorazione", tag: "01", description: "Menù digitale e prenotazioni online per pizzeria artigianale", metric: "+45% prenotazioni" },
  { id: 2, name: "Bottega Rossi", sector: "Artigianato", tag: "02", description: "Portfolio lavori con galleria e richiesta preventivi", metric: "+30% lead" },
  { id: 3, name: "Moda Bella", sector: "Retail", tag: "03", description: "E-commerce Shopify con catalogo e pagamenti online", metric: "+60% vendite" },
];

const Index = () => {
  const whatsappLink = "https://wa.me/393000000000?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20un%20sito%20web";

  return (
    <Layout>
      {/* Hero — editorial, oversized type, geometric accents */}
      <section className="relative min-h-[90vh] flex items-center bg-foreground overflow-hidden pb-8">
        {/* Decorative geometric elements */}
        <div className="absolute -right-16 top-16 h-64 w-64 md:h-96 md:w-96 rounded-full border-2 border-accent/20" />
        <div className="absolute -right-8 top-24 h-48 w-48 md:h-72 md:w-72 rounded-full border border-accent/15" />
        <div className="absolute right-[20%] top-0 w-[2px] h-32 bg-accent/15" />
        <div className="absolute left-[10%] bottom-[10%] h-40 w-40 rounded-full border-2 border-accent/15" />
        <div className="absolute right-[30%] bottom-[5%] w-[2px] h-20 bg-accent/10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10 md:pt-16">
          <div className="max-w-5xl">
            {/* Micro label */}
            <div className="animate-slide-up mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/50">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Web Studio — Torino
              </span>
            </div>

            {/* Oversized headline */}
            <h1 className="text-display font-serif font-black text-primary-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Sito web in<br />
              <span className="text-accent">3 giorni</span> per la<br />
              tua azienda<span className="text-accent">.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-10 md:mt-14 max-w-md text-sm leading-relaxed text-primary-foreground/50 md:text-base animate-slide-up" style={{ animationDelay: "0.25s" }}>
              Creiamo il tuo sito web AI-powered in maniera rapida<br />
              ed efficiente.<br />
              Investi una tantum, hai il sito per sempre
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex gap-3 animate-slide-up" style={{ animationDelay: "0.35s" }}>
              <a
                href="https://calendly.com/morphwebstudio/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:scale-105"
              >
                Preventivo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-primary-foreground/20 px-7 text-sm font-medium text-primary-foreground/70 transition-all hover:border-accent hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom bar info */}
          <div className="mt-16 flex flex-wrap gap-8 border-t border-primary-foreground/10 pt-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <span className="text-xs uppercase tracking-widest text-primary-foreground/30">Delivery</span>
              <p className="mt-1 font-serif text-lg font-bold text-primary-foreground">48 ore</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-primary-foreground/30">A partire da</span>
              <p className="mt-1 font-serif text-lg font-bold text-accent">1.000€</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-primary-foreground/30">Clienti</span>
              <p className="mt-1 font-serif text-lg font-bold text-primary-foreground">PMI italiane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progetti Featured — editorial grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Portfolio</span>
              <h2 className="text-display-sm font-serif font-bold text-foreground mt-2">
                Progetti<span className="text-accent">.</span>
              </h2>
            </div>
            <Link
              to="/progetti"
              className="hidden md:inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
            >
              Tutti i progetti <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent/50 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                {/* Image placeholder with tag */}
                <div className="relative h-52 bg-foreground flex items-center justify-center overflow-hidden">
                  <span className="absolute top-4 left-4 font-serif text-5xl font-black text-primary-foreground/10">
                    {project.tag}
                  </span>
                  <span className="font-serif text-xl font-bold text-primary-foreground/30">{project.name}</span>
                  {/* Geometric accent */}
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border-2 border-accent/30 transition-transform group-hover:scale-110" />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-accent">
                      {project.sector}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-semibold text-foreground">{project.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/progetti"
              className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-accent"
            >
              Tutti i progetti <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact — split layout inspired by reference */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          {/* Left — Copy with Bodoni Moda */}
          <div className="flex flex-col justify-center bg-accent px-8 md:px-16 py-20 relative">
            <svg className="absolute -left-10 top-10 w-48 h-48 opacity-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 170 Q60 20, 100 100 Q140 180, 180 30" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#000000] mb-6">Prenota una call</span>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#000000]">
              Parliamo del<br />
              tuo prossimo<br />
              <span className="text-[#000000]">progetto.</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-[#000000] leading-relaxed max-w-md">
              Prenota una chiamata gratuita di 15 minuti. Analizzeremo insieme le tue esigenze e ti proporremo la soluzione migliore per il tuo business.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                Oppure scrivici su WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Calendly embed */}
          <div className="flex flex-col justify-center bg-foreground px-8 md:px-16 py-20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">Scegli un orario</h3>
            <p className="text-sm text-primary-foreground/60 mb-8">
              Seleziona data e ora che preferisci — la call dura 15 minuti.
            </p>
            <div className="w-full rounded-lg overflow-hidden bg-background shadow-lg" style={{ minHeight: 580 }}>
              <iframe
                src="https://calendly.com/morphwebstudio/new-meeting"
                width="100%"
                height="580"
                frameBorder="0"
                title="Prenota una call"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
