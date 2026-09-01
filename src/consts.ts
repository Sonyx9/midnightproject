/** Konstanty prodejní jednostránky Midnight Project. */

export const BRAND = {
  name: 'Midnight Project',
  /** TODO: adresa, na které běží TAHLE jednostránka.
   *  Jede z toho canonical i og:url — pokud ji hostuješ jinde, přepiš. */
  url: 'https://midnightproject.cz',
  description:
    'Ebooky a výzvy pro lidi, co chtějí makat na sobě. Plány a trackery, žádné motivační kecy.',
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
