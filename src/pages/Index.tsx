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
      <section className="relative min-h-[90vh] flex items-center bg-foreground overflow-hidden">
        {/* Geometric accents */}
        <div className="geo-circle w-64 h-64 md:w-96 md:h-96 -right-20 top-10 opacity-30" />
        <div className="geo-circle w-32 h-32 left-[15%] bottom-[10%] opacity-20" />
        <div className="geo-line w-px h-32 right-[30%] top-0 opacity-20" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl">
            {/* Micro label */}
            <div className="animate-slide-up mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/50">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Web Studio — Torino
              </span>
            </div>

            {/* Oversized headline */}
            <h1 className="text-display font-serif font-black text-primary-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Sito web in<br />
              <span className="text-accent">48h</span> per la<br />
              tua PMI<span className="text-accent">.</span>
            </h1>

            {/* Subtitle + CTA row */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-slide-up" style={{ animationDelay: "0.25s" }}>
              <p className="max-w-md text-sm leading-relaxed text-primary-foreground/50 md:text-base">
                Siti professionali, responsive e ottimizzati per artigiani, ristoratori e negozi locali. A partire da 1.000€.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/contatti"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:scale-105"
                >
                  Preventivo
                  <ArrowRight className="h-4 w-4" />
                </Link>
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

      {/* WhatsApp Lead Form — dark editorial */}
      <section className="bg-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="geo-circle w-48 h-48 -left-16 top-10 opacity-15" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-lg">
            <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/30">Contatto rapido</span>
            <h2 className="text-display-sm font-serif font-bold text-primary-foreground mt-2">
              Parliamone<span className="text-accent">.</span>
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/50">
              Compila il form — ti rispondiamo su WhatsApp in pochi minuti.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const nome = (form.elements.namedItem("nome") as HTMLInputElement).value.trim();
                const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value.trim();
                const messaggio = (form.elements.namedItem("messaggio") as HTMLTextAreaElement).value.trim();
                if (nome && telefono) {
                  const text = encodeURIComponent(`Ciao, sono ${nome} (${telefono}). ${messaggio}`);
                  window.open(`https://wa.me/393000000000?text=${text}`, "_blank");
                }
              }}
              className="mt-8 space-y-4"
            >
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-primary-foreground/40">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  maxLength={100}
                  className="flex h-11 w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-primary-foreground/40">Telefono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  maxLength={20}
                  className="flex h-11 w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-accent transition-colors"
                  placeholder="+39 xxx xxx xxxx"
                />
              </div>
              <div>
                <label htmlFor="messaggio" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-primary-foreground/40">Messaggio</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={3}
                  maxLength={500}
                  className="flex w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Di cosa hai bisogno?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Invia su WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
