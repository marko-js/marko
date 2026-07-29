import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import type { DeferredLoad } from "../../utils/import-with-context";
import { navigate, wait } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const lineupItems = (document: Document) =>
  [...document.querySelectorAll("ol.lineup li")].map((li) => li.textContent);
const deferred = (document: Document): DeferredLoad[] =>
  (document.defaultView as any).__deferredLoads || [];
const fallbacks = (document: Document): string[] =>
  (document.defaultView as any).__persistedNavFallbacks || [];

// A navigation consumes the escape-anchor loader; a second navigation parks
// on the consumed slot. When the FIRST navigation's load settles late with a
// failure, the failure belongs to the superseded navigation — the loader is
// restored and the live park must retry it (and apply when the retry
// resolves), never remain parked forever and never take a fallback for the
// old navigation's error.
export const config: TestConfig = {
  persisted: true,
  defer_load: ["lineup.marko.persisted"],
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      performers: ["ada", "grace"],
      $global: { persisted: true },
    },
    clickCount,
    // Navigation N dispatches the escaped renderer: loader consumed, load
    // gated by the harness, patch parked.
    navigate({
      performers: ["ada", "grace", "alan"],
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.deepEqual(lineupItems(document), ["ada", "grace"]);
      assert.equal(deferred(document).length, 1);
      assert.equal(fallbacks(document).length, 0);
    },
    // Navigation N+1 dispatches again: the consumed slot means "wait on the
    // in-flight registration" — it parks, no second load starts.
    navigate({
      performers: ["grace"],
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.deepEqual(lineupItems(document), ["ada", "grace"]);
      assert.equal(deferred(document).length, 1);
      assert.equal(fallbacks(document).length, 0);
    },
    // N's load settles late, failing. The failure is N's (superseded, not
    // delivered); the restored loader must be retried for the live park.
    (document: Document) => deferred(document)[0].fail("late chunk failure"),
    wait,
    (document: Document) => {
      assert.equal(deferred(document).length, 2);
      assert.equal(fallbacks(document).length, 0);
    },
    // The retry resolves: the merge registers and the live park applies.
    (document: Document) => deferred(document)[1].release(),
    wait,
    (document: Document) => {
      assert.deepEqual(lineupItems(document), ["grace"]);
      assert.equal(fallbacks(document).length, 0);
    },
    clickCount,
  ],
};
