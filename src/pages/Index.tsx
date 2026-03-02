import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const projects = [
{ id: 1, name: "Pizzeria Da Mario", sector: "Ristorazione", description: "Sito vetrina con menù digitale e prenotazioni online", metric: "+45% prenotazioni" },
{ id: 2, name: "Bottega Legno Rossi", sector: "Artigianato", description: "Portfolio lavori con galleria fotografica e richiesta preventivi", metric: "+30% lead" },
{ id: 3, name: "Shop Moda Bella", sector: "Retail", description: "E-commerce Shopify con catalogo prodotti e pagamenti online", metric: "+60% vendite online" }];


const Index = () => {
  const whatsappLink = "https://wa.me/393000000000?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20un%20sito%20web";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">
              Sito web in <span className="text-accent">48h</span> per la tua PMI
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 md:text-xl" style={{ animationDelay: "0.15s", animationFillMode: "forwards", opacity: 0, animation: "fade-in 0.6s ease-out 0.15s forwards" }}>
              Creiamo siti professionali, responsive e ottimizzati per artigiani, ristoratori e negozi locali. A partire da 1.000€.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.3s", animationFillMode: "forwards", opacity: 0, animation: "fade-in 0.6s ease-out 0.3s forwards" }}>
              <Link
                to="/contatti"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-8 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90">

                Richiedi Preventivo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-primary-foreground/20 px-8 text-base font-medium text-primary-foreground transition-colors hover:border-accent hover:text-accent">Sito web in
48h per la
tua azienda.
                <MessageCircle className="h-4 w-4" />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Progetti Featured */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              I nostri <span className="text-accent">progetti</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Alcuni dei siti che abbiamo realizzato per PMI italiane
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => <div
              key={project.id}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg">

                <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-secondary">
                  <span className="text-sm text-muted-foreground">Mockup</span>
                </div>
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {project.sector}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                <p className="mt-3 text-sm font-semibold text-accent">{project.metric}</p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/progetti"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80">

              Vedi tutti i progetti <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Form Lead WhatsApp */}
      <section className="bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              Parliamone su <span className="text-accent">WhatsApp</span>
            </h2>
            <p className="mt-3 text-primary-foreground/70">
              Compila il form e ti contattiamo subito
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
              className="mt-8 space-y-4 text-left">

              <div>
                <label htmlFor="nome" className="mb-1 block text-sm font-medium text-primary-foreground/70">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  maxLength={100}
                  className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Il tuo nome" />

              </div>
              <div>
                <label htmlFor="telefono" className="mb-1 block text-sm font-medium text-primary-foreground/70">Telefono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  maxLength={20}
                  className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+39 xxx xxx xxxx" />

              </div>
              <div>
                <label htmlFor="messaggio" className="mb-1 block text-sm font-medium text-primary-foreground/70">Messaggio (opzionale)</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={3}
                  maxLength={500}
                  className="flex w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Di cosa hai bisogno?" />

              </div>
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">

                <MessageCircle className="h-4 w-4" />
                Invia su WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>);

};

export default Index;