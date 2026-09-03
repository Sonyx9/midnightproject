/** Konstanty prodejní jednostránky Midnight Project. */

export const BRAND = {
  name: 'Midnight Project',
  /** TODO: adresa, na které běží TAHLE jednostránka.
   *  Jede z toho canonical i og:url — pokud ji hostuješ jinde, přepiš. */
  url: 'https://midnightproject.cz',
  description:
    'Výzvy pro lidi, co se chtějí postavit sami sobě. Plán na každý den, tracker a parta, co jede s tebou.',
  locale: 'cs_CZ',
  lang: 'cs',
  ogImage: '/og-default.jpg',
} as const;

/** E-shop, kde se ebooky kupují. */
export const SHOP_SITE = 'https://budujsamsebe.cz';

/**
 * E-shop zatím neběží — budujsamsebe.cz je u registrátora zaparkovaná.
 * Dokud je tohle `false`, míří odkazy na jeho homepage místo na konkrétní
 * produktové URL, ať neposíláme kupující do 404. Po spuštění přepni na `true`.
 */
export const SHOP_LIVE = false;

export const shopLink = (path: string) =>
  SHOP_LIVE ? `${SHOP_SITE}${path}` : SHOP_SITE;

export const LINKS = {
  shop: SHOP_SITE,
  challenges: shopLink('/#vyber-si-vyzvu'),
  tracker: shopLink('/tracker'),
  privacy: shopLink('/zasady-ochrany-osobnich-udaju'),
  terms: shopLink('/obchodni-podminky'),
} as const;

/**
 * Web je zatím za bránou — návštěvník uvidí „Připravujeme“ a musí se přihlásit.
 * Přepnutím na `false` brána zmizí a stránka se zároveň začne indexovat.
 *
 * POZOR: je to závěs, ne zámek. Stránka je statická, takže se její obsah
 * stáhne do prohlížeče vždy — kdo umí otevřít zdroj, přečte si ho i bez hesla.
 * Na skutečné utajení je potřeba ochrana na straně serveru (viz README).
 */
export const SITE_LOCKED = true;

/** SHA-256 z „jméno:heslo“. Samotné heslo tak ve zdroji nikde není. */
export const GATE_HASH =
  '212bee9070e88e1eb3e38a2cbf1dd2fc2c04172219689f591a10e158bf98f54d';

/** Popisek pod tlačítkem Koupit — nákup jede přes platební bránu. */
export const CHECKOUT_NOTE = 'Objednávka přes SimpleShop';

/** Provozovatel — povinné údaje do patičky. */
export const LEGAL = {
  company: 'Digitance CZ s.r.o.',
  ico: '24892581',
  email: 'fik.maxmilian@gmail.com',
} as const;

/**
 * Ecomail embed — DOPLNIT před nasazením.
 * Ecomail → Formuláře → tvůj formulář → HTML kód.
 * `action` má tvar https://<ucet>.ecomailapp.cz/public/subscribe/<listId>/<hash>
 */
export const ECOMAIL = {
  action: 'https://ECOMAIL_UCET.ecomailapp.cz/public/subscribe/LIST_ID/FORM_HASH',
  tag: '75hard-tracker',
} as const;
