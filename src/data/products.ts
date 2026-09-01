export interface Product {
  slug: string;
  title: string;
  /** Jedna věta — co to je. */
  tagline: string;
  /** Co konkrétně kupující dostane. Žádné sliby o výsledcích. */
  includes: string[];

  /** ID objednávkového formuláře v SimpleShopu (sss("createForm", …)). */
  simpleShopFormId: string;

  /**
   * Volitelné: cena v korunách, jen číslo (např. 349).
   * Cenu ukazuje i samotný SimpleShop formulář — tohle je jen pro kartu
   * a pro Offer ve strukturovaných datech. Dokud je null, karta cenu neuvádí.
   */
  priceCzk: number | null;

  /** Odznak na kartě. */
  badge?: string;
}

export const products: Product[] = [
  {
    slug: 'dopaminovy-detox',
    title: 'Dopaminový detox: 7denní plán',
    tagline:
      'Sedm dní bez levné stimulace. Nejkratší cesta, jak si sáhnout na to, co ti bere pozornost.',
    includes: [
      'Denní plán na 7 dní — co vyřadit a čím to nahradit',
      'Tracker na každý den',
      'Návod, jak si udržet, co detox nastartoval',
    ],
    simpleShopFormId: '0MYKV', // SimpleShop form #154814
    priceCzk: null,
    badge: 'Začni tady',
  },
  {
    slug: '75-dni',
    title: '75 dní',
    tagline:
      'Sedmdesát pět dní, jasná pravidla, nula výmluv — ve verzi, která počítá s českým obchodem a českou zimou.',
    includes: [
      'Kompletní 75denní plán se všemi pravidly',
      'Jídelníčky poskládané z běžných českých potravin',
      'Tracker deluxe na celou dobu výzvy',
    ],
    simpleShopFormId: 'ODo3X', // SimpleShop form #155206
    priceCzk: null,
    badge: 'Vlajková loď',
  },
];

const czk = new Intl.NumberFormat('cs-CZ', {
  style: 'currency',
  currency: 'CZK',
  maximumFractionDigits: 0,
});

export const formatPrice = (value: number) => czk.format(value);

/** Kotva na objednávkový formulář daného produktu. */
export const orderAnchor = (slug: string) => `objednavka-${slug}`;
