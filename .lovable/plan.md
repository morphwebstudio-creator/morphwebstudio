

## Piano: Aggiornare la prima card progetto con il sito Elettricista

### Modifiche in `src/pages/Index.tsx`

**Array `projects` (riga 6):**
- Primo progetto: cambiare da "Da Mario" / "Ristorazione" a dati coerenti con il sito elettricista
  - `name`: "Elettricista Rapido 24h"
  - `sector`: "Servizi"
  - `description`: "Sito vetrina con prenotazione interventi, certificazioni e disponibilità 24/7"
  - `metric`: un dato demo coerente (es. "+50% chiamate")
- Aggiungere campo `url` all'oggetto per linkare a `https://mariotorinoelettricista.lovable.app`
- Aggiungere campo `image` con URL Unsplash di un elettricista al lavoro (es. quadro elettrico, impianto)

**Card nel grid (righe ~104-130):**
- Rendere la card cliccabile: wrappare con `<a href={project.url} target="_blank">` se `url` è presente
- Sostituire il placeholder visivo (attualmente solo testo su sfondo scuro) con un `<img>` che usa il campo `image`, con `object-cover` per riempire l'area
- Mantenere il tag numerico e il cerchio decorativo sovrapposti all'immagine

### Risultato
La prima card mostrerà una foto di elettricista, il nome "Elettricista Rapido 24h", settore "Servizi", e cliccandoci si aprirà il sito demo in una nuova tab.

