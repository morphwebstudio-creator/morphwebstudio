import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const CALENDLY = "https://calendly.com/morphwebstudio/new-meeting";

const Servizi = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative overflow-hidden bg-foreground py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute -right-16 top-16 h-64 w-64 md:h-96 md:w-96 rounded-full border-2 border-accent/20" />
      <div className="absolute -right-8 top-24 h-48 w-48 md:h-72 md:w-72 rounded-full border border-accent/15" />
      <div className="absolute right-[20%] top-0 w-[2px] h-32 bg-accent/15" />
      <div className="absolute left-[10%] bottom-[10%] h-40 w-40 rounded-full border-2 border-accent/15" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/50 animate-slide-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            MorphWebStudio
          </span>
          <h1 className="mt-8 text-display font-serif font-black text-primary-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
            La Nostra<br />
            Soluzione <span className="text-accent">AI</span><span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-primary-foreground/50 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Siti web professionali, veloci e accessibili grazie all'intelligenza artificiale.
          </p>
        </div>
      </div>
    </section>

    {/* SEZIONE 1 — Cosa Facciamo (LEFT, bg light) */}
    <section className="bg-[#64748B] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute right-[8%] top-[10%] w-[2px] h-24 bg-accent/15" />
      <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full border-2 border-accent/15" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Copy — LEFT */}
          <div className="animate-slide-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4 block">Cosa Facciamo</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-black">
              Siti Web AI-Powered per PMI e freelancer
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-black/80">
              Creiamo siti web completamente funzionali in pochi giorni, usando un'intelligenza artificiale avanzata come Lovable.dev e hostati su Netlify.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
              Il nostro servizio non offre vetrine statiche, ma piattaforme dinamiche con integrazione Calendly per prenotazioni automatizzate, SEO ottimizzata e strumenti pronti all'uso.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
              Che tu abbia un e-commerce, una s.r.l., o sia un freelancer, noi di MorphWebStudio offriremo una soluzione adatta a te.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:scale-105"
              >
                Inizia Ora
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Visual — RIGHT */}
          <div className="relative flex items-center justify-center min-h-[280px] animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <div className="h-56 w-56 md:h-72 md:w-72 rounded-full border-2 border-accent/30" />
            <div className="absolute h-40 w-40 md:h-52 md:w-52 rounded-full border border-accent/20" />
            <div className="absolute h-24 w-24 md:h-32 md:w-32 rounded-full bg-accent/10" />
            <div className="absolute top-4 right-8 w-[2px] h-16 bg-accent/20" />
            <div className="absolute bottom-8 left-12 w-[2px] h-12 bg-accent/15" />
          </div>
        </div>
      </div>
    </section>

    {/* SEZIONE 2 — Come lo Facciamo (RIGHT, bg dark) */}
    <section className="bg-foreground py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-[5%] top-[15%] w-[2px] h-28 bg-accent/15" />
      <div className="absolute -left-12 bottom-16 h-52 w-52 rounded-full border-2 border-accent/15" />
      <div className="absolute left-[15%] bottom-[5%] h-32 w-32 rounded-full border border-accent/10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Visual — LEFT */}
          <div className="relative flex items-center justify-center min-h-[280px] order-2 md:order-1 animate-slide-up">
            <div className="h-56 w-56 md:h-72 md:w-72 rounded-full border-2 border-accent/25" />
            <div className="absolute h-44 w-44 md:h-56 md:w-56 rounded-full border border-accent/15" />
            <div className="absolute h-20 w-20 md:h-28 md:w-28 rounded-full bg-accent/10" />
            <div className="absolute top-6 left-10 w-[2px] h-14 bg-accent/20" />
            <div className="absolute bottom-10 right-6 w-[2px] h-10 bg-accent/15" />
          </div>

          {/* Copy — RIGHT */}
          <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4 block">Come lo Facciamo</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-primary-foreground">
              Il Processo AI: Efficiente, Accattivante, Trasversale
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-primary-foreground/60">
              L'AI di Lovable.dev genera un codice pulito e design moderni via prompt naturali, che utilizzeremo da scheletro base per lo sviluppo effettivo del sito web.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/60">
              La potenza di calcolo AI supera il lavoro umano in rapidità, estetica ed efficienza. Questo si traduce in costi abbattuti del 75%, permettendoci di lavorare a ritmi più alti rispetto a un'agency tradizionale, dove un team di sviluppatori deve manualmente strutturare da zero il codice di ogni singola pagina.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/60">
              In questo modo la nostra produttività si alza del 90%, dandoci la possibilità di offrire un sito completamente funzionante, "chiavi in mano" dopo solo pochi giorni.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:scale-105"
              >
                Prenota Adesso
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SEZIONE 3 — Perché lo Facciamo (LEFT, bg light) */}
    <section className="bg-[#64748B] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute right-[12%] top-[8%] w-[2px] h-20 bg-accent/15" />
      <div className="absolute -right-8 top-20 h-44 w-44 rounded-full border-2 border-accent/15" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Copy — LEFT */}
          <div className="animate-slide-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4 block">Perché lo Facciamo</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-black">
              La Nostra Mission: democratizzare la digitalizzazione
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-black/80">
              Crediamo che ogni PMI, libero professionista o piccolo imprenditore italiano meriti visibilità online senza barriere tecniche o costi proibitivi.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
              La nostra vision: un ecosistema PMI connesse, sostenibili e competitive via AI, che si trasformano da invisibili a leader locali.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/80">
              Lo facciamo perché l'80% delle PMI italiane manca di sito (dati ISTAT 2025), e l'AI è la leva democratica per colmare il gap digitale con prezzi fortemente competitivi e accessibili a chiunque.
            </p>
            <p className="mt-4 text-sm md:text-base font-semibold leading-relaxed text-black">
              Non siamo un'agency tradizionale, siamo il partner per la tua scalata.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:scale-105"
              >
                Prenota Adesso
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Visual — RIGHT */}
          <div className="relative flex items-center justify-center min-h-[280px] animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <div className="h-52 w-52 md:h-68 md:w-68 rounded-full border-2 border-accent/25" />
            <div className="absolute h-36 w-36 md:h-48 md:w-48 rounded-full border border-accent/20" />
            <div className="absolute h-20 w-20 md:h-28 md:w-28 rounded-full bg-accent/10" />
            <div className="absolute top-2 right-12 w-[2px] h-20 bg-accent/20" />
            <div className="absolute bottom-6 left-8 w-[2px] h-14 bg-accent/15" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Servizi;
