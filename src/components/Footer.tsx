import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/393000000000?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi";

  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            


            <p className="mt-3 text-sm text-primary-foreground/70">
              Siti web professionali per PMI italiane.<br />
              MVP in 48h. Responsive. Lead-oriented.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 font-serif text-sm font-semibold uppercase tracking-wider">Navigazione</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="transition-colors hover:text-accent">Home</Link></li>
              <li><Link to="/servizi" className="transition-colors hover:text-accent">Servizi</Link></li>
              <li><Link to="/progetti" className="transition-colors hover:text-accent">Progetti</Link></li>
              <li><Link to="/chi-siamo" className="transition-colors hover:text-accent">Chi Siamo</Link></li>
              <li><Link to="/contatti" className="transition-colors hover:text-accent">Contatti</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="mb-3 font-serif text-sm font-semibold uppercase tracking-wider">Contatti</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Torino, Italia
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@morphwebstudio.it" className="transition-colors hover:text-accent">
                  info@morphwebstudio.it
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">

                  <MessageCircle className="h-4 w-4" />
                  Scrivici su WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {currentYear} MorphWebStudio. Tutti i diritti riservati.
        </div>
      </div>
    </footer>);

};

export default Footer;