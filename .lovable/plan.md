

## Piano: 3 modifiche alla sezione Progetti

### 1. Cambiare immagine copertina Elettricista (`src/data/projects.ts`)
Sostituire l'immagine Unsplash attuale con una che ritragga un elettricista caucasico (es. `photo-1621905252507-b35492cc74b4` o simile con soggetto bianco/caucasico al lavoro su impianto elettrico).

### 2. Aggiungere 4° progetto Imbianchino (`src/data/projects.ts`)
Nuovo entry:
- name: "Torino Paint Wizard"
- sector: "Imbianchino"
- tag: "04"
- description: "Sito vetrina per servizi di tinteggiatura con preventivi, galleria lavori e recensioni"
- metric: "+35% richieste"
- url: `https://torino-paint-wizard.lovable.app`
- image: Unsplash di imbianchino/pittore edile al lavoro

### 3. Carousel scorrevole nella Home (`src/pages/Index.tsx`)
Sostituire la griglia `md:grid-cols-3` nella sezione Portfolio con un carousel Embla (componenti `Carousel`, `CarouselContent`, `CarouselItem` già disponibili in `src/components/ui/carousel.tsx`):
- Ogni slide mostra una `ProjectCard`
- Su desktop: mostrare ~3 card visibili contemporaneamente (`basis-1/3`)
- Su mobile: 1 card per volta
- Frecce prev/next e loop attivo
- Rimuovere l'animazione `animate-slide-up` dalle singole card dentro il carousel (conflitto)

### File modificati
- `src/data/projects.ts` — immagine elettricista + nuovo progetto imbianchino
- `src/pages/Index.tsx` — carousel al posto della griglia

