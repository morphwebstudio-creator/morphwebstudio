import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import logoIntero from "@/assets/logo-intero.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/393000000000?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi";

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6">
        {/* Big footer headline */}
        <div className="mb-12">
          <h2 className="text-display-sm font-serif font-bold text-primary-foreground">
            Parliamo del tuo<br />
            prossimo <span className="text-accent">progetto</span><span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/40">Studio</span>
            <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
              Siti web professionali per PMI italiane.<br />
              MVP in 48h. Responsive. Lead-oriented.
            </p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/40">Navigazione</span>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/" className="transition-colors hover:text-accent">Home</Link></li>
              <li><Link to="/servizi" className="transition-colors hover:text-accent">Servizi</Link></li>
              <li><Link to="/progetti" className="transition-colors hover:text-accent">Progetti</Link></li>
              <li><Link to="/chi-siamo" className="transition-colors hover:text-accent">Chi Siamo</Link></li>
              <li><Link to="/contatti" className="transition-colors hover:text-accent">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/40">Contatti</span>
            <ul className="mt-3 space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Torino, Italia
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <a href="mailto:info@morphwebstudio.it" className="transition-colors hover:text-accent">
                  info@morphwebstudio.it
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-primary-foreground/10 pt-6">
          <img src={logoIntero} alt="MorphWebStudio" className="h-5 w-auto opacity-40" />
          <span className="text-xs text-primary-foreground/30">
            © {currentYear} MorphWebStudio
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
