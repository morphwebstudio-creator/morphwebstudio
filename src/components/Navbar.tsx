import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoIntero from "@/assets/logo-intero.png";

const navItems = [
{ label: "Home", path: "/" },
{ label: "Servizi", path: "/servizi" },
{ label: "Progetti", path: "/progetti" },
{ label: "Chi Siamo", path: "/chi-siamo" },
{ label: "Contatti", path: "/contatti" }];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#000000] backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <img src={logoIntero} alt="MorphWebStudio" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
          <li key={item.path}>
              <Link
              to={item.path}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-serif font-medium transition-colors hover:text-accent",
                location.pathname === item.path ?
                "text-accent" :
                "text-muted-foreground"
              )}>

                {item.label}
              </Link>
            </li>
          )}
          <li className="ml-3">
            <a
              href="https://calendly.com/morphwebstudio/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-serif font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              Inizia Ora
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Menu">

          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen &&
      <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) =>
          <li key={item.path}>
                <Link
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-serif font-medium transition-colors hover:text-accent",
                location.pathname === item.path ?
                "text-accent" :
                "text-muted-foreground"
              )}>
                  {item.label}
                </Link>
              </li>
          )}
            <li className="mt-2">
              <a
              href="https://calendly.com/morphwebstudio/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-accent px-3 py-2 text-center text-sm font-serif font-semibold text-accent-foreground transition-opacity hover:opacity-90">
                Inizia Ora
              </a>
            </li>
          </ul>
        </div>
      }
    </nav>);

};

export default Navbar;