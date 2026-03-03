

## Piano: Fix copy e cambio background sezioni 1 e 3

Il codice contiene già il copy corretto in entrambe le sezioni. Il problema visivo è probabilmente dovuto ai colori del testo che si confondono con lo sfondo. Le modifiche richieste risolveranno anche questo.

### Modifiche in `src/pages/Servizi.tsx`

**Sezione 1 (Cosa Facciamo, riga 34):**
- Background: da `bg-muted` a `bg-black`
- Titolo H2 (riga 43): da `text-foreground` a `text-[#F1F5F9]`
- Paragrafi (righe 46, 49, 52): da `text-muted-foreground` a `text-[#F1F5F9]/70`

**Sezione 3 (Perché lo Facciamo, riga 129):**
- Background: da `bg-muted` a `bg-black`
- Titolo H2 (riga 138): da `text-foreground` a `text-[#F1F5F9]`
- Paragrafi (righe 141, 144, 147): da `text-muted-foreground` a `text-[#F1F5F9]/70`
- Frase finale bold (riga 150): da `text-foreground` a `text-[#F1F5F9]`

Le label accent ("Cosa Facciamo", "Perché lo Facciamo") restano `text-accent` come richiesto.

