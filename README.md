# Midnight Project — jednostránka

Statický web postavený v [Astro](https://astro.build). Prodává dvě výzvy
(dopaminový detox a 75 dní) přes objednávkové formuláře SimpleShopu.

## Vývoj

```bash
npm install
npm run dev      # localhost:4321
npm run build    # výstup do dist/
npm run preview  # náhled sestaveného webu
npx astro check  # typová kontrola
```

## Nasazení

Web běží na **midnightproject.cz** v kořeni domény přes GitHub Pages.
Každý push do `main` spustí `.github/workflows/deploy.yml`, který web sestaví
a nasadí.

Dvě věci, které se nesmí rozbít, jinak se po nasazení rozsypou styly:

- `astro.config.mjs` nesmí mít `base` — web není v podadresáři.
- `public/CNAME` musí obsahovat doménu.

Nepřidávej druhý workflow, který nahrává `path: '.'` (šablona „static.yml“
z GitHubu). Kořen repa neobsahuje `index.html`, takže Pages vrátí 404 — a kvůli
sdílené concurrency skupině `pages` navíc zruší korektní build.

## Brána „Připravujeme“

Dokud je v `src/consts.ts` `SITE_LOCKED = true`, návštěvník uvidí placeholder
s přihlášením. Přihlašovací údaje nejsou v repu uložené v čitelné podobě —
porovnává se SHA-256 z `jméno:heslo` proti `GATE_HASH`.

Změna údajů:

```bash
python3 -c "import hashlib; print(hashlib.sha256(b'jmeno:heslo').hexdigest())"
```

Výsledek vlož do `GATE_HASH`. Spuštění webu naostro = přepnout `SITE_LOCKED`
na `false`; tím zároveň zmizí `noindex`, který zamčenou stránku drží mimo
vyhledávače.

> **Není to zabezpečení.** Stránka je statická, takže se její obsah stáhne do
> prohlížeče vždy a kdokoli si ho přečte ve zdrojovém kódu — brána je závěs,
> ne zámek. Pokud má být obsah opravdu neveřejný, je potřeba ochrana na straně
> serveru (Cloudflare Access, Netlify password protection, basic auth) nebo
> obsah do doby spuštění vůbec nenasazovat.

## Na co si dát pozor

- **Markup SimpleShopu v `OrderDialog.astro` neupravuj.** `createForm()` sahá na
  `[data-SimpleShopForm='…'] > div`; bez přímého potomka `<div>` spadne na null
  a formulář se nevykreslí. Z prvního `<a>` si počítá hash kampaně, takže odkaz
  ani jeho text neměnit.
- Formulář se staví až při otevření modálu — ve skrytém okně si SimpleShop nemá
  jak změřit výšku.

## Zbývá doplnit

- `ECOMAIL.action` v `src/consts.ts` je placeholder — bez něj se sběr e-mailů
  nikam neodesílá.
- `priceCzk` u produktů v `src/data/products.ts` je `null`, takže karty neuvádějí
  cenu a neemitují `Offer` do strukturovaných dat. Cenu ukazuje samotný formulář.
- Logo a `og-default.jpg` v `public/` chybí.
