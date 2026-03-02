import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Servizi", path: "/servizi" },
  { label: "Progetti", path: "/progetti" },
  { label: "Chi Siamo", path: "/chi-siamo" },
  { label: "Contatti", path: "/contatti" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/80">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span className="font-serif text-lg font-bold tracking-tight text-primary-foreground">
            MORPH<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-xs font-medium uppercase tracking-widest transition-colors hover:text-accent",
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-primary-foreground/60"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contatti"
              className="inline-flex h-8 items-center rounded-full border border-accent px-5 text-xs font-semibold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Contattaci
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 text-primary-foreground md:hidden"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="bg-foreground md:hidden">
          <ul className="flex flex-col px-4 py-6 gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3 text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent",
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-primary-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                to="/contatti"
                onClick={() => setIsOpen(false)}
                className="block rounded-full border border-accent py-3 text-center text-sm font-semibold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Contattaci
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
