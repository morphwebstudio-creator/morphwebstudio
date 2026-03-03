## Piano: Sostituire "Servizi" con "La Nostra Soluzione AI"

### Modifiche

**1. Navbar (`src/components/Navbar.tsx`)**

- Cambiare label da "Servizi" a ""Soluzione AI" 

**2. Pagina Servizi → Soluzione AI (`src/pages/Servizi.tsx`)**
Riscrittura completa con tre sezioni alternate (sinistra-destra-sinistra), elementi decorativi geometrici coerenti con la home (cerchi, linee accent), e CTA Calendly.

Struttura:

```text
┌─────────────────────────────────────────────┐
│  HERO BANNER (bg-foreground #0A2540)        │
│  Titolo: "La Nostra Soluzione AI"           │
│  Sottotitolo introduttivo                   │
│  Cerchi/linee decorative accent             │
├─────────────────────────────────────────────┤
│  SEZIONE 1: COSA FACCIAMO (align LEFT)      │
│  ┌──────────────┬──────────────┐            │
│  │ Copy sx      │ Visual dx    │            │
│  │ H1 + testo   │ (decorativo) │            │
│  └──────────────┴──────────────┘            │
│  bg: #F1F5F9                                │
├─────────────────────────────────────────────┤
│  SEZIONE 2: COME LO FACCIAMO (align RIGHT)  │
│  ┌──────────────┬──────────────┐            │
│  │ Visual sx    │ Copy dx      │            │
│  │ (decorativo) │ H2 + testo   │            │
│  └──────────────┴──────────────┘            │
│  bg: #0A2540 (dark)                         │
├─────────────────────────────────────────────┤
│  SEZIONE 3: PERCHÉ LO FACCIAMO (align LEFT) │
│  ┌──────────────┬──────────────┐            │
│  │ Copy sx      │ Visual dx    │            │
│  │ H2 + testo   │ (decorativo) │            │
│  └──────────────┴──────────────┘            │
│  bg: #F1F5F9                                │
│  CTA "Prenota Adesso" → Calendly            │
├─────────────────────────────────────────────┤
```

**Dettagli stilistici:**

- Elementi geometrici decorativi (cerchi border-accent, linee verticali) come nella home
- Font Bodoni Moda per tutti i titoli, Inter per il body
- Palette: primary #0A2540, accent #F59E0B, neutro #F1F5F9, nero #000000
- Animazioni slide-up coerenti con la home
- CTA con stile rounded-full bg-accent come nella home, testi "Inizia Ora" e "Prenota Adesso"
- Sezioni alternate chiaro/scuro per ritmo visivo
- Copy esattamente come fornito dall'utente

**3. Aggiornamento route (`src/App.tsx`)**

- La route `/servizi` resta invariata, punta al componente rinominato internamente