// Server render + the three navigation transports (A/B/C) + a client apply/reconcile
// that reconstructs the page from the minimal state payload. The split is deliberate:
//
//   * APP LOGIC (models, filtering, branch decisions) lives here, server-side only.
//   * TEMPLATES (templates.js) are pure and shared by server SSR and client apply —
//     i.e. they are the "logic-stripped updates chunk".
//
// This lets us actually verify the central claim: the client can reconstruct the exact
// target DOM from (discriminant + final hole values) using only the shared templates,
// never receiving server-only logic.

import { getProduct, queryProducts, relatedProducts } from "./data.js";
import * as T from "./templates.js";

// ---------- app logic (server only) ----------

const LABELS = { all: "All products", audio: "Audio", wearables: "Wearables", home: "Home", cameras: "Cameras" };

export function listModel(route) {
  const products = queryProducts({ category: route.category, sort: route.sort });
  return {
    view: "list",
    label: LABELS[route.category] || "Products",
    count: products.length,
    keys: products.map((p) => p.id),
    rows: products, // full product records; holes are derived at render time
  };
}

export function detailModel(route) {
  const p = getProduct(route.id);
  return {
    view: "detail",
    id: p.id,
    branch: p.inStock ? 0 : 1, // server-only <if> discriminant
    product: p,
    relatedKeys: relatedProducts(p.id).map((r) => r.id),
    related: relatedProducts(p.id),
  };
}

export const modelFor = (route) => (route.view === "list" ? listModel(route) : detailModel(route));

// ---------- SSR (server) ----------

// Renders an outlet to self-describing HTML and returns the island scopes that need
// resuming (the reactive "add to cart" buttons). `idGen` assigns scope ids.
export function renderOutlet(model, cart, idGen) {
  const islands = [];
  const button = (id) => {
    const scopeId = idGen();
    const inCart = cart.has(id) ? 1 : 0;
    islands.push([scopeId, id, inCart]);
    return T.tplAddButton({ scopeId, id, inCart });
  };

  if (model.view === "list") {
    const cards = model.rows
      .map((p) => T.tplCard({ id: p.id, title: p.title, price: p.price, rating: p.rating, img: p.img }, button(p.id)))
      .join("");
    return { html: T.tplListOutlet(cards, model.count, model.label), islands };
  }

  const p = model.product;
  const related = model.related.map((r) => T.tplRelatedRow({ id: r.id, title: r.title, price: r.price, img: r.img })).join("");
  const html = T.tplDetail(
    { id: p.id, title: p.title, price: p.price, rating: p.rating, img: p.img, blurb: p.blurb },
    T.tplBanner(model.branch),
    button(p.id),
    related,
  );
  return { html, islands };
}

const resumeScript = (cartScope, islands) =>
  `<script>$R=${JSON.stringify({ c: cartScope, i: islands })}</script>`;

// Tier A — full document reload (today's multi-page behavior).
export function renderFullPage(route, cart, cartCount) {
  let n = 0;
  const idGen = () => ++n;
  const { html, islands } = renderOutlet(modelFor(route), cart, idGen);
  return T.tplLayout(html, { cartCount }) + resumeScript([0, cartCount], islands);
}

// ---------- navigation update transports ----------

// State serialization uses short positional tuples / keys, mirroring Marko's
// single-character accessor compression. JSON here is a *conservative* stand-in:
// Marko's real wire format is tighter, so these C numbers are an upper bound.
function stateForOutlet(model, cart) {
  if (model.view === "list") {
    return {
      v: "l",
      l: model.label,
      n: model.count,
      k: model.keys, // discriminant: the for-loop keys (order + identity)
      // final hole values per row: [title, price, rating, img, inCart]
      r: model.rows.map((p) => [p.title, p.price, p.rating, p.img, cart.has(p.id) ? 1 : 0]),
    };
  }
  const p = model.product;
  return {
    v: "d",
    id: p.id,
    b: model.branch, // discriminant: server-only <if> branch
    h: [p.title, p.price, p.rating, p.img, p.blurb, cart.has(p.id) ? 1 : 0],
    rk: model.relatedKeys,
    rr: model.related.map((r) => [r.title, r.price, r.img]),
  };
}

// Builds B (fragment HTML) and C (state-only) for a navigation. `shellDelta` carries
// any changed reactive shell state (here: cart count, which is unchanged → omitted).
export function buildUpdate(fromRoute, toRoute, cart, cartCount, prevCartCount) {
  const header = { v: "build7", u: routeUrl(toRoute), t: "Storefront" };
  const shell = cartCount !== prevCartCount ? { c: cartCount } : undefined;

  // B: partial render — only the changed subtree (the outlet), shell skipped.
  let n = 1000;
  const { html, islands } = renderOutlet(modelFor(toRoute), cart, () => ++n);
  const fragment =
    JSON.stringify({ ...header, splice: "outlet", shell }) + "\n" + html + "\n" + JSON.stringify({ i: islands });

  // C: state + discriminant — no outlet HTML at all.
  const stateOnly = JSON.stringify({ ...header, shell, s: stateForOutlet(modelFor(toRoute), cart) });

  // C+ (list only): client declares the keys it currently shows; server omits holes
  // for reused keys, sending tuples only for keys the client lacks.
  let hinted = null;
  const toModel = modelFor(toRoute);
  if (toModel.view === "list" && fromRoute.view === "list") {
    const have = new Set(listModel(fromRoute).keys);
    const rows = toModel.rows.map((p) => (have.has(p.id) ? 0 : [p.title, p.price, p.rating, p.img, cart.has(p.id) ? 1 : 0]));
    const requestHintBytes = Buffer.byteLength(JSON.stringify([...have]));
    hinted = {
      body: JSON.stringify({ ...header, shell, s: { v: "l", l: toModel.label, n: toModel.count, k: toModel.keys, r: rows } }),
      requestHintBytes,
    };
  }

  return { fragment, stateOnly, hinted };
}

const routeUrl = (r) => (r.view === "list" ? `/c/${r.category}${r.sort ? "?sort=" + r.sort : ""}` : `/p/${r.id}`);

// ---------- client (reconstruct from minimal payload using shared templates) ----------

// Tracks what the client currently shows so it can reconcile + equality-skip.
export function clientStateFromModel(model, cart) {
  if (model.view === "list") {
    const holes = new Map();
    for (const p of model.rows) holes.set(p.id, [p.title, p.price, p.rating, p.img, cart.has(p.id) ? 1 : 0]);
    return { view: "list", label: model.label, count: model.count, keys: model.keys.slice(), holes };
  }
  const p = model.product;
  const relHoles = new Map();
  model.related.forEach((r, i) => relHoles.set(model.relatedKeys[i], [r.title, r.price, r.img]));
  return {
    view: "detail",
    branch: model.branch,
    holes: [p.title, p.price, p.rating, p.img, p.blurb, cart.has(p.id) ? 1 : 0],
    relKeys: model.relatedKeys.slice(),
    relHoles,
  };
}

const idGenClient = () => {
  let n = 0;
  return () => 1000000 + ++n; // client scopes start high, like Marko (1e6)
};

// Applies a tier-C state payload against the client's current state, reconciling and
// reconstructing the outlet HTML. Returns {html, ops} where ops is the apply-work proxy.
export function clientApply(prev, payload) {
  const s = payload.s;
  const gen = idGenClient();
  const ops = { created: 0, reused: 0, removed: 0, moved: 0, holeUpdates: 0, branchSwaps: 0 };
  const button = (id, inCart) => {
    ops.created++; // islands for newly created rows
    return T.tplAddButton({ scopeId: gen(), id, inCart });
  };

  if (s.v === "l") {
    const next = { view: "list", label: s.l, count: s.n, keys: s.k.slice(), holes: new Map() };
    const prevHoles = prev && prev.view === "list" ? prev.holes : new Map();
    const prevIndex = new Map((prev && prev.view === "list" ? prev.keys : []).map((k, i) => [k, i]));

    const cards = s.k.map((id, i) => {
      const tuple = s.r[i] === 0 ? prevHoles.get(id) : s.r[i]; // 0 => reuse client-held holes (C+)
      next.holes.set(id, tuple);
      const [title, price, rating, img, inCart] = tuple;
      if (prevIndex.has(id)) {
        ops.reused++;
        if (prevIndex.get(id) !== i) ops.moved++;
        const prevTuple = prevHoles.get(id);
        if (prevTuple && JSON.stringify(prevTuple) !== JSON.stringify(tuple)) ops.holeUpdates++;
        // reused rows keep their existing island scope id; for HTML reconstruction
        // we re-emit identical markup (scope id normalized away in the equality check).
        return T.tplCard({ id, title, price, rating, img }, T.tplAddButton({ scopeId: gen(), id, inCart }));
      }
      return T.tplCard({ id, title, price, rating, img }, button(id, inCart));
    });
    for (const k of prevIndex.keys()) if (!next.keys.includes(k)) ops.removed++;

    return { html: T.tplListOutlet(cards.join(""), s.n, s.l), next, ops };
  }

  // detail
  const [title, price, rating, img, blurb, inCart] = s.h;
  if (prev && prev.view === "detail") {
    if (prev.branch !== s.b) ops.branchSwaps++;
    if (JSON.stringify(prev.holes) !== JSON.stringify(s.h)) ops.holeUpdates++;
  } else ops.created++;
  const prevRel = new Map((prev && prev.relKeys ? prev.relKeys : []).map((k, i) => [k, i]));
  const related = s.rk
    .map((id, i) => {
      const [t, pr, im] = s.rr[i];
      if (prevRel.has(id)) ops.reused++;
      else ops.created++;
      return T.tplRelatedRow({ id, title: t, price: pr, img: im });
    })
    .join("");
  const html = T.tplDetail({ id: s.id, title, price, rating, img, blurb }, T.tplBanner(s.b), button(s.id, inCart), related);
  return { html, ops };
}
