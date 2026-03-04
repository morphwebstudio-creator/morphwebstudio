

## Piano: Aggiornare card 2 e creare pagina Progetti

### 1. Aggiornare la seconda card in `src/pages/Index.tsx`

**Array `projects` (riga 7):**
- `name`: "Torino Sweet Lab" (o simile, dal sito)
- `sector`: "Pasticceria"
- `description`: "Sito vetrina per pasticceria artigianale con menu, galleria e prenotazioni"
- `metric`: "+40% ordini" (demo)
- `url`: `https://torinosweetlab.lovable.app/`
- `image`: URL Unsplash di pasticceria/dolci (es. torte artigianali)

### 2. Costruire la pagina `src/pages/Progetti.tsx`

**Hero section** — stessa struttura dell'hero di `/servizi`:
- Sfondo `bg-foreground`, cerchi decorativi, label "MorphWebStudio", titolo "I Nostri Progetti." con accent, sottotitolo breve
- Stesse animazioni `animate-slide-up`

**Griglia card progetti** — sotto l'hero:
- Importare lo stesso array `projects` (estrarlo in un file condiviso o duplicarlo)
- Riutilizzare lo stesso layout card già presente in `Index.tsx` (immagine, tag, sector, nome, descrizione, metrica, link cliccabile)
- Griglia `md:grid-cols-3` con gap e padding coerenti

Per evitare duplicazione, estrarrò l'array `projects` e il componente card in un file condiviso `src/data/projects.ts` e `src/components/ProjectCard.tsx`, importandoli sia in Index che in Progetti.

