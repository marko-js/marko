import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const text = (document: Document, sel: string) =>
  document.querySelector(sel)?.textContent;

const $global = {
  persisted: true,
  persistedHeldShells: true as const,
  persistedToken: true,
};
const input = (price: number) => ({
  a: true,
  b: true,
  name: "W1DGT",
  price,
  badge: "B4DGE",
  $global,
});

// A group key is `site|path`: the client resolves the update merge from the
// SITE, and only the path is application data. Tokenizing the whole key still
// looks opaque but leaves no site to look up, so every dispatch falls back to
// a document load. Both carriers are checked — the key as it rides a scope
// (`#GroupKey`/`GK`) and as a completion-line dispatch (`[2,<branch>,"key"]`).
const GROUP_KEY = /(?:"#GroupKey"|GK):"([^"]+)"/g;
const GROUP_DISPATCH = /\[2,\d+,"([^"]+)"\]/g;
let seenKeys = 0;
let seenDispatches = 0;

const assertResolvable = (key: string, what: string) => {
  const at = key.indexOf("|");
  assert.notEqual(at, -1, `${what} lost its site prefix: ${key}`);
  assert.doesNotMatch(
    key.slice(0, at),
    /^t\d+$/,
    `${what} tokenized its site: ${key}`,
  );
  // The path half is application data and must be opaque.
  assert.match(key.slice(at + 1), /^t\d+$/, `${what} leaked its path: ${key}`);
};

const assertKeys = (frames: string[]) => {
  for (const frame of frames) {
    for (const [, key] of frame.matchAll(GROUP_KEY)) {
      seenKeys++;
      assertResolvable(key, "group key");
    }
    for (const [, key] of frame.matchAll(GROUP_DISPATCH)) {
      seenDispatches++;
      assertResolvable(key, "group dispatch");
    }
  }
  return frames;
};

// Opacity must not cost resolvability: an unresolvable dispatch throws
// ("no registered update and no loader") when the patch applies, so these
// navigates are themselves the regression guard.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    input(54321),
    navigate(input(54321), { mutateFrames: assertKeys }),
    navigate(input(54321), { mutateFrames: assertKeys }),
    (document: Document) => {
      assert.equal(text(document, "p.info"), "W1DGT/54321");
      assert.equal(text(document, "span.badge"), "b4dge");
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.tap")!.click(),
    // A sibling miss dispatches the unchanged group on its own — the shape
    // that has only the key to name its site by.
    navigate(input(98765), { mutateFrames: assertKeys }),
    (document: Document) => {
      assert.equal(text(document, "p.info"), "W1DGT/98765");
      assert.equal(text(document, "span.badge"), "b4dge");
      assert.equal(text(document, "button.tap"), "tap 1");
      // Guards every assertion above against passing vacuously.
      assert.ok(seenKeys > 0, "no group key was inspected");
      assert.ok(seenDispatches > 0, "no group dispatch was inspected");
    },
  ],
};
