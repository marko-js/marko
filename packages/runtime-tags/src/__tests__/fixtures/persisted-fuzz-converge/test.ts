import assert from "node:assert/strict";

import type { Steps, TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

type Item = { id: string; label: string };
type Data = { title: string; note: string; items: Item[]; tags: string[] };

// Deterministic: the sequence is a fixed corpus, and a failure names the
// step that diverged. Widen STEPS (or change SEED) to search further.
const SEED = 20260725;
const STEPS = 28;

function rng(seed: number) {
  let state = seed >>> 0 || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return ((state >>> 0) % 1e6) / 1e6;
  };
}

const next = rng(SEED);

// The request-derived state the server renders from.
let data: Data = {
  title: "T0",
  note: "N0",
  items: [
    { id: "a", label: "a0" },
    { id: "b", label: "b0" },
  ],
  tags: ["x", "y"],
};
// The client-owned state a patch must never clobber.
let showDetails = true;
let revision = 0;

function mutate(): Data {
  const items = data.items.map((item) => ({ ...item }));
  const tags = [...data.tags];
  revision++;
  switch (Math.floor(next() * 6)) {
    case 0:
      return { ...data, title: `T${revision}`, items, tags };
    case 1:
      return { ...data, note: `N${revision}`, items, tags };
    case 2: {
      items.push({ id: `i${revision}`, label: `l${revision}` });
      return { ...data, items, tags };
    }
    case 3: {
      if (items.length > 1) items.splice(Math.floor(next() * items.length), 1);
      return { ...data, items, tags };
    }
    case 4: {
      if (items.length) {
        const at = Math.floor(next() * items.length);
        items[at] = { ...items[at], label: `e${revision}` };
      }
      return { ...data, items, tags };
    }
    default: {
      if (next() < 0.5) tags.push(`t${revision}`);
      else if (tags.length > 1) tags.pop();
      return { ...data, items, tags };
    }
  }
}

// Elision must be invisible: the same navigation has to land the same
// DOM whether its claims are honoured, absent, or joined by region
// possession. The oracle never changes, so any divergence under a
// different claim mode is an elision bug, not a rendering one.
type ClaimMode = "claims" | "no-echo" | "regions";
const input = (value: Data, mode: ClaimMode = "claims") => ({
  ...value,
  $global: {
    persisted: true,
    ...(mode === "no-echo" ? { persistedEcho: false } : null),
    ...(mode === "regions" ? { persistedHeldRegions: true } : null),
  },
});

// The oracle: what the page MUST show, derived from the request data and
// the client's own state — never from the wire. Any divergence means a
// patch delivered stale, missing, or misrouted content. Snapshotted as
// each step is generated, since the corpus is built before it runs.
function expected(value: Data, visible: boolean) {
  return {
    title: value.title,
    items: value.items.map((item) => item.label),
    note: visible ? value.note : null,
    tags: visible ? [...value.tags] : null,
  };
}

function actual(document: Document) {
  const text = (selector: string) =>
    [...document.querySelectorAll(selector)].map((el) => el.textContent);
  const details = document.querySelector("section.details");
  return {
    title: document.querySelector("h1.title")!.textContent,
    items: text("li.item"),
    note: details ? document.querySelector("p.note")!.textContent : null,
    tags: details ? text("li.tag") : null,
  };
}

const steps: Steps = [input(data)];
// Guaranteed hidden-edit cycles: hide the gated branch, change the data
// it renders, then re-enter. That is the shape where a patch has no live
// DOM to write to and delivery has to survive as state — the path a
// random walk reaches too rarely to be trusted.
function hiddenEditCycle() {
  if (showDetails) {
    showDetails = false;
    steps.push((document: Document) =>
      document.querySelector<HTMLButtonElement>("button.toggle")!.click(),
    );
    steps.push(assertion());
  }
  for (let edit = 0; edit < 2; edit++) {
    data = {
      ...data,
      note: `H${++revision}`,
      tags: [...data.tags, `h${revision}`],
    };
    steps.push(navigate(input(data)));
    steps.push(assertion());
  }
  showDetails = true;
  steps.push((document: Document) =>
    document.querySelector<HTMLButtonElement>("button.toggle")!.click(),
  );
  steps.push(assertion());
}

function assertion() {
  const want = expected(data, showDetails);
  const at = steps.length;
  return (document: Document) => {
    assert.deepEqual(
      actual(document),
      want,
      `diverged at step ${at} (seed ${SEED})`,
    );
  };
}

for (let step = 0; step < STEPS; step++) {
  if (step % 7 === 6) {
    hiddenEditCycle();
    continue;
  }
  const roll = next();
  if (roll < 0.25) {
    // Client-state toggle: hides or re-enters the gated branch, which is
    // where request delivery has to survive without a live DOM to patch.
    showDetails = !showDetails;
    steps.push((document: Document) => {
      document.querySelector<HTMLButtonElement>("button.toggle")!.click();
    });
  } else if (roll < 0.35) {
    steps.push((document: Document) => {
      document.querySelector<HTMLButtonElement>("button.count")!.click();
    });
  } else {
    data = mutate();
    const mode: ClaimMode =
      next() < 0.2 ? "no-echo" : next() < 0.25 ? "regions" : "claims";
    steps.push(navigate(input(data, mode)));
  }
  steps.push(assertion());
}

// A random walk of navigations and client-state changes must converge on
// the same DOM a fresh render of the same data would produce.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps,
};
