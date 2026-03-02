

# Piano: Logo e Forme Decorative Ispirate al Logo MW

## Cosa fare

### 1. Copiare i loghi nel progetto
- `intero.png` → `src/assets/logo-intero.png` (per navbar e footer)
- `mw.png` → non necessario nel codice, solo reference per le forme

### 2. Navbar e Footer: logo reale
- Sostituire il testo "MORPH." con `<img>` del logo `intero.png` in entrambi i componenti
- Dimensioni: ~140px wide in navbar, ~120px in footer

### 3. Forme decorative ispirate alla silhouette MW
Le curve del logo MW sono archi fluidi che si incrociano formando una "M" e una "W" con tratti curvi. Attualmente ci sono cerchi (`geo-circle`) e linee verticali (`geo-line`).

Sostituire con **curve SVG inline** che richiamano gli archi del logo:
- Archi parabolici aperti (non cerchi chiusi)
- Tratti curvi a S che ricordano le onde del logo
- Stesse proprietà visive attuali: `border-2 border-accent`, opacity bassa (0.15-0.30), posizionamento assoluto

Le forme saranno usate nella hero section e nella sezione WhatsApp form, nelle stesse posizioni dove ora ci sono i cerchi.

### File modificati
- `src/components/Navbar.tsx` — logo img
- `src/components/Footer.tsx` — logo img
- `src/pages/Index.tsx` — SVG decorativi al posto di geo-circle/geo-line
- `src/index.css` — eventuale rimozione classi geo-circle/geo-line inutilizzate

