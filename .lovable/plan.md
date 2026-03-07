

## Piano: Pagina Contatti completa

### Struttura

**Hero section** — stesso pattern di `/servizi` e `/progetti`:
- Sfondo `bg-foreground`, cerchi decorativi, label "MorphWebStudio", titolo "Contattaci." con accent, sottotitolo

**Form section** — layout split-screen su desktop:
- **Colonna sinistra**: info di contatto (email morphwebstudio@gmail.com, link Calendly, breve testo invito)
- **Colonna destra**: form con campi:
  - Nome (required)
  - Email (required)
  - Richiesta / Messaggio (textarea, required)
  - Telefono (opzionale)
  - Come ci hai trovato (select opzionale)
- Validazione con zod + react-hook-form (già installati)
- Bottone "Invia Richiesta" in accent (`bg-accent text-accent-foreground`)
- Submit apre `mailto:morphwebstudio@gmail.com` con subject e body precompilati (no backend)
- Toast di conferma con sonner

**Palette**: sfondo sezione form `bg-background`, card form con bordo sottile, accenti arancio sui focus ring e bottone

### File modificati
- `src/pages/Contatti.tsx` — riscrittura completa

