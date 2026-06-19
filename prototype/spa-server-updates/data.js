// Deterministic, realistic-ish storefront catalog used by the prototype.
// Seeded so benchmark numbers are reproducible across runs.

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CATEGORIES = ["audio", "wearables", "home", "cameras"];
const ADJ = [
  "Aurora", "Nimbus", "Vertex", "Lumen", "Cobalt", "Solstice", "Halcyon",
  "Pioneer", "Cascade", "Meridian", "Atlas", "Zephyr", "Quartz", "Onyx",
];
const NOUN = {
  audio: ["Wireless Headphones", "Studio Earbuds", "Portable Speaker", "Soundbar"],
  wearables: ["Fitness Watch", "Smart Ring", "Sleep Tracker", "Activity Band"],
  home: ["Smart Thermostat", "Air Purifier", "Robot Vacuum", "Desk Lamp"],
  cameras: ["Mirrorless Camera", "Action Cam", "Security Camera", "Drone Kit"],
};
const BLURB = [
  "Engineered for everyday use with a focus on battery life and comfort.",
  "A refined upgrade with improved sensors and a lighter, durable shell.",
  "Pro-grade performance that stays simple enough for the whole family.",
  "Thoughtful design, low-latency wireless, and all-day endurance.",
  "Premium materials meet practical features for work and travel.",
];

export const PRODUCTS = (() => {
  const rand = mulberry32(42);
  const list = [];
  for (let i = 0; i < 48; i++) {
    const category = CATEGORIES[i % CATEGORIES.length];
    const nouns = NOUN[category];
    const title = `${ADJ[(i * 3) % ADJ.length]} ${nouns[(i >> 2) % nouns.length]}`;
    list.push({
      id: `p${i + 1}`,
      title,
      category,
      price: Math.round((19 + rand() * 480) * 100) / 100,
      rating: Math.round((3 + rand() * 2) * 10) / 10,
      inStock: rand() > 0.25,
      img: `/img/${category}/${i + 1}.webp`,
      blurb: BLURB[i % BLURB.length],
    });
  }
  return list;
})();

const BY_ID = new Map(PRODUCTS.map((p) => [p.id, p]));
export const getProduct = (id) => BY_ID.get(id);

export function queryProducts({ category, sort } = {}) {
  let out = PRODUCTS.slice();
  if (category && category !== "all") {
    out = out.filter((p) => p.category === category);
  }
  if (sort === "price-asc") out.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") out.sort((a, b) => b.price - a.price);
  else if (sort === "rating") out.sort((a, b) => b.rating - a.rating);
  // "featured" = catalog order (no sort)
  return out;
}

export function relatedProducts(id, n = 4) {
  const p = getProduct(id);
  return PRODUCTS.filter((q) => q.category === p.category && q.id !== id).slice(0, n);
}
