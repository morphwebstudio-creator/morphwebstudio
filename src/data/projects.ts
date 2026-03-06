import elettricistaImg from "@/assets/pexels-gustavo-fring-6720530.jpg";
import paintWizardImg from "@/assets/pexels-shkrabaanthony-4981797.jpg";
import idraulicoImg from "@/assets/pexels-declan-wright-1933616497-28806925.jpg";

export interface Project {
  id: number;
  name: string;
  sector: string;
  tag: string;
  description: string;
  metric: string;
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Elettricista Rapido 24h",
    sector: "Servizi",
    tag: "01",
    description: "Sito vetrina con prenotazione interventi, certificazioni e disponibilità 24/7",
    metric: "+50% chiamate",
    url: "https://mariotorinoelettricista.lovable.app",
    image: elettricistaImg,
  },
  {
    id: 2,
    name: "Torino Sweet Lab",
    sector: "Pasticceria",
    tag: "02",
    description: "Sito vetrina per pasticceria artigianale con menu, galleria e prenotazioni",
    metric: "+40% ordini",
    url: "https://torinosweetlab.lovable.app/",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80",
  },
  {
    id: 3,
    name: "Smile Torino",
    sector: "Odontoiatria",
    tag: "03",
    description: "Sito vetrina per studio dentistico con prenotazioni, servizi e team medico",
    metric: "+45% prenotazioni",
    url: "https://smiletorino.lovable.app",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
  },
  {
    id: 4,
    name: "Torino Paint Wizard",
    sector: "Imbianchino",
    tag: "04",
    description: "Sito vetrina per servizi di tinteggiatura con preventivi, galleria lavori e recensioni",
    metric: "+35% richieste",
    url: "https://torino-paint-wizard.lovable.app",
    image: paintWizardImg,
  },
  {
    id: 5,
    name: "Pronto Idraulico TO",
    sector: "Idraulica",
    tag: "05",
    description: "Sito vetrina per servizio idraulico con interventi urgenti, preventivi e assistenza 24h",
    metric: "+40% interventi",
    url: "https://pronto-idraulico-to.lovable.app",
    image: idraulicoImg,
  },
];
