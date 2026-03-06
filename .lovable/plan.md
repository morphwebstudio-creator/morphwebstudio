

## Piano: Aggiornare copertine e aggiungere progetto Idraulico

### 1. Copiare le 3 immagini in `src/assets/`
- `pexels-gustavo-fring-6720530.jpg` → copertina Elettricista
- `pexels-shkrabaanthony-4981797.jpg` → copertina Torino Paint Wizard
- `pexels-declan-wright-1933616497-28806925.jpg` → copertina nuovo progetto Idraulico

### 2. Aggiornare `src/data/projects.ts`
- Convertire il file per importare le immagini come moduli ES6 (`import elettricistaImg from "@/assets/..."`)
- Sostituire l'URL Unsplash dell'Elettricista con l'immagine caricata
- Sostituire l'URL Unsplash di Torino Paint Wizard con l'immagine caricata
- Aggiungere 5° progetto:
  - name: "Pronto Idraulico TO"
  - sector: "Idraulica"
  - tag: "05"
  - description: "Sito vetrina per servizio idraulico con interventi urgenti, preventivi e assistenza 24h"
  - metric: "+40% interventi"
  - url: `https://pronto-idraulico-to.lovable.app`
  - image: immagine caricata (tubi/impianti)

### File modificati
- `src/data/projects.ts` — import immagini locali, aggiornamento copertine, nuovo progetto

