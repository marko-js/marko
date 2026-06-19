// Shared, *pure* compiled templates: given hole values + already-rendered child
// HTML, produce markup. These functions contain NO business/control-flow logic
// (no filtering, no branch decisions, no data access). They are exactly what
// lives in BOTH the SSR output and the logic-stripped "updates" chunk — the
// embodiment of the design's "templates are bundled, logic is not".
//
// Resume markers mimic Marko 6: short comment markers make server HTML
// self-describing so the client can walk + resume it. Node markers carry a
// scope id; branch markers delimit control-flow regions.

const P = "$"; // resume marker prefix (Marko uses runtimeId+renderId)
export const nodeMark = (scopeId) => `<!--${P}*${scopeId}-->`;
export const branchOpen = `<!--${P}[-->`;
export const branchClose = (ids) => `<!--${P}]${ids}-->`;

const esc = (s) =>
  String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const money = (n) => `$${n.toFixed(2)}`;

export function tplStars(rating) {
  const full = Math.round(rating);
  return `<span class="stars" aria-label="${rating} out of 5">${"★".repeat(full)}${"☆".repeat(5 - full)}</span>`;
}

// Reactive island: "add to cart" button. Lives in the PRIMARY bundle. On the
// wire it needs only its scope state (product id + in-cart flag).
export function tplAddButton({ scopeId, id, inCart }) {
  return (
    nodeMark(scopeId) +
    `<button class="add-btn${inCart ? " in-cart" : ""}" data-product="${id}" type="button">` +
    `${inCart ? "Added ✓" : "Add to cart"}</button>`
  );
}

// Server-only product card (logic-stripped in the updates chunk).
export function tplCard(h, buttonHtml) {
  return (
    `<article class="card" data-key="${h.id}">` +
    `<a class="card-media" href="/p/${h.id}"><img src="${h.img}" alt="${esc(h.title)}" loading="lazy"/>` +
    (h.badge ? `<span class="badge">${esc(h.badge)}</span>` : "") +
    `</a>` +
    `<div class="card-body">` +
    `<h3 class="card-title"><a href="/p/${h.id}">${esc(h.title)}</a></h3>` +
    tplStars(h.rating) +
    `<p class="price">${money(h.price)}</p>` +
    buttonHtml +
    `</div></article>`
  );
}

export function tplListOutlet(cardsHtml, count, label) {
  return (
    `<section class="listing">` +
    `<div class="listing-head"><h2>${esc(label)}</h2><span class="count">${count} items</span></div>` +
    `<div class="grid">${cardsHtml}</div>` +
    `</section>`
  );
}

// Server-only stock banner: a non-stateful <if>. Discriminant = branch index.
export function tplBanner(branch) {
  return branch === 0
    ? `<p class="banner in">In stock — ships today</p>`
    : `<p class="banner out">Out of stock — notify me when available</p>`;
}

export function tplRelatedRow(h) {
  return (
    `<li class="rel" data-key="${h.id}"><a href="/p/${h.id}">` +
    `<img src="${h.img}" alt="${esc(h.title)}" loading="lazy"/>` +
    `<span class="rel-title">${esc(h.title)}</span>` +
    `<span class="rel-price">${money(h.price)}</span></a></li>`
  );
}

export function tplDetail(h, bannerHtml, buttonHtml, relatedRowsHtml) {
  return (
    `<section class="detail" data-key="${h.id}">` +
    `<div class="hero"><img class="hero-img" src="${h.img}" alt="${esc(h.title)}"/></div>` +
    `<div class="hero-info">` +
    `<h1>${esc(h.title)}</h1>` +
    tplStars(h.rating) +
    `<p class="price big">${money(h.price)}</p>` +
    `<p class="blurb">${esc(h.blurb)}</p>` +
    branchOpen + bannerHtml + branchClose("") +
    buttonHtml +
    `</div>` +
    `<aside class="related"><h2>Related</h2><ul>${relatedRowsHtml}</ul></aside>` +
    `</section>`
  );
}

// Persistent shell. Header cart-count is a reactive island (changes only when the
// cart changes). The <main> outlet is what navigations replace/update.
export function tplLayout(outletHtml, { cartCount }) {
  return (
    `<!doctype html><html lang="en"><head><meta charset="utf-8"/>` +
    `<meta name="viewport" content="width=device-width,initial-scale=1"/>` +
    `<title>Storefront</title><link rel="stylesheet" href="/assets/app.css"/></head>` +
    `<body><header class="site"><a class="logo" href="/">◆ Storefront</a>` +
    `<nav><a href="/c/all">All</a><a href="/c/audio">Audio</a>` +
    `<a href="/c/wearables">Wearables</a><a href="/c/home">Home</a><a href="/c/cameras">Cameras</a></nav>` +
    `<a class="cart" href="/cart">` + nodeMark(0) + `Cart (${cartCount})</a>` +
    `</header><main>${outletHtml}</main>` +
    `<footer class="site"><p>© Storefront — demo for the SPA server-updates prototype.</p></footer>` +
    `</body></html>`
  );
}
