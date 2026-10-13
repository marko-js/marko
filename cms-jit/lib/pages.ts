export interface CmsSection {
  type: string;
  props: Record<string, unknown>;
}

export interface CmsPage {
  slug: string;
  title: string;
  sections: CmsSection[];
}

type Archetype = (rand: Rand, n: number) => CmsSection[];
type Rand = ReturnType<typeof createRand>;

const archetypes: Record<string, Archetype> = {
  landing: (r, n) => [
    promo(r),
    hero(r, r.pick(["centered", "split"])),
    cardGrid(r, 3, 6),
    carousel(r),
    faq(r),
  ],
  article: (r, n) => [
    hero(r, "minimal"),
    richText(r, n),
    richText(r, n + 1),
    cardGrid(r, 3, 3),
  ],
  category: (r) => [
    promo(r),
    hero(r, "centered"),
    cardGrid(r, 4, 12),
    cardGrid(r, 2, 4),
  ],
  help: (r) => [hero(r, "minimal"), faq(r), richText(r, 0)],
};

export const archetypeNames = Object.keys(archetypes);

const anySection = [
  promo,
  (r: Rand) => hero(r, r.pick(["centered", "split", "minimal"])),
  (r: Rand) => cardGrid(r, r.pick([2, 3, 4]), 3 + r.int(6)),
  carousel,
  faq,
  (r: Rand) => richText(r, 0),
];

/**
 * Deterministic CMS payloads: same archetype ⇒ same block types, structural
 * props vary a little. A `longTail` share of pages are freeform: any blocks,
 * in any order, so nearly every one is a shape of its own.
 */
export function generatePages(
  count: number,
  seed = 1,
  longTail = 0,
): CmsPage[] {
  const rand = createRand(seed);
  return Array.from({ length: count }, (_, i) => {
    if (rand.bool(longTail)) {
      return {
        slug: `/freeform/${i}`,
        title: `freeform page ${i}`,
        sections: Array.from({ length: 3 + rand.int(5) }, () =>
          rand.pick(anySection)(rand, i),
        ),
      };
    }
    const archetype = archetypeNames[i % archetypeNames.length];
    return {
      slug: `/${archetype}/${i}`,
      title: `${archetype} page ${i}`,
      sections: archetypes[archetype](rand, i),
    };
  });
}

function promo(r: Rand): CmsSection {
  return {
    type: "promo-banner",
    props: {
      tone: r.pick(["info", "sale"]),
      dismissible: r.bool(0.8),
      message: r.sentence(8),
      link: r.bool(0.5) ? { label: "Shop now", href: r.href() } : undefined,
    },
  };
}

function hero(r: Rand, variant: string): CmsSection {
  return {
    type: "hero",
    props: {
      variant,
      title: r.sentence(5),
      subtitle: r.sentence(14),
      image: { src: r.img(), alt: r.sentence(3) },
      cta: { label: "Learn more", href: r.href() },
    },
  };
}

function cardGrid(r: Rand, columns: number, count: number): CmsSection {
  return {
    type: "card-grid",
    props: {
      columns,
      heading: r.sentence(4),
      cards: Array.from({ length: count + r.int(3) }, () => ({
        title: r.sentence(4),
        body: r.sentence(20),
        href: r.href(),
        badge: r.bool(0.2) ? "New" : undefined,
      })),
    },
  };
}

function carousel(r: Rand): CmsSection {
  return {
    type: "carousel",
    props: {
      autoplay: r.bool(0.3),
      showDots: r.bool(0.7),
      slides: Array.from({ length: 3 + r.int(4) }, () => ({
        src: r.img(),
        alt: r.sentence(3),
        caption: r.bool(0.5) ? r.sentence(6) : undefined,
      })),
    },
  };
}

function faq(r: Rand): CmsSection {
  return {
    type: "faq",
    props: {
      heading: "Frequently asked questions",
      multiOpen: r.bool(0.3),
      items: Array.from({ length: 4 + r.int(5) }, () => ({
        question: r.sentence(8) + "?",
        answer: r.sentence(30),
      })),
    },
  };
}

function richText(r: Rand, n: number): CmsSection {
  const paragraphs = Array.from(
    { length: 3 + r.int(4) },
    () => `<p>${r.sentence(40)}</p>`,
  ).join("");
  return {
    type: "rich-text",
    props: { html: `<h2>Part ${n}</h2>${paragraphs}` },
  };
}

function createRand(seed: number) {
  let s = seed >>> 0;
  const next = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const words =
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua marko cms resumable patch shape bundle".split(
      " ",
    );
  const int = (max: number) => Math.floor(next() * max);
  return {
    int,
    bool: (p: number) => next() < p,
    pick: <T>(list: T[]) => list[int(list.length)],
    sentence: (n: number) =>
      Array.from({ length: n }, () => words[int(words.length)]).join(" "),
    href: () => `/p/${int(100000).toString(36)}`,
    img: () => `https://cdn.example.com/img/${int(100000).toString(36)}.jpg`,
  };
}
