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

// Two undeliverable dispatches park behind an in-flight load. When the
// queue drains, the first failure latches the fallback and OWNS it: the
// second undeliverable must not fire the sink again, and nothing after
// the latch may keep mutating the page.
const swapTickersForVarId = {
  mutateFrames: (frames: string[]) =>
    frames.map((frame) =>
      frame.replace(
        /("ConditionalRenderer:[^"]*":(?:_\.[a-z]=)?"[^"]*)\/tags\/ticker\.marko"/g,
        '$1/template.marko_0_count/var"',
      ),
    ),
};

export const config: TestConfig = {
  persisted: true,
  defer_load: ["lineup.marko.persisted"],
  // The mutated frames target the debug renderer id; optimize encodes ids.
  skip_optimize: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      title: "First",
      performers: ["ada", "grace"],
      view: "ticker",
      entries: ["est", "cet"],
      entriesB: ["utc"],
      $global: { persisted: true },
    },
    clickCount,
    // Navigation N consumes the escaped lineup loader; the load stays gated.
    navigate({
      title: "Second",
      performers: ["ada", "grace", "alan"],
      view: "ticker",
      entries: ["est", "cet"],
      entriesB: ["utc"],
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.equal(deferred(document).length, 1);
      assert.equal(fallbacks(document).length, 0);
    },
    // Navigation N+1 parks BOTH undeliverable ticker dispatches behind the
    // in-flight load, and replaces the lineup park with its own patch.
    navigate(
      {
        title: "Third",
        performers: ["grace"],
        view: "ticker",
        entries: ["est", "cet", "ist"],
        entriesB: ["utc", "gmt"],
        $global: { persisted: true },
      },
      swapTickersForVarId,
    ),
    (document: Document) => {
      assert.equal(fallbacks(document).length, 0);
    },
    // Drain: the lineup merge applies first (parked earliest), the first
    // undeliverable latches the fallback, the second is skipped — one sink
    // call, exactly.
    (document: Document) => deferred(document)[0].release(),
    wait,
    (document: Document) => {
      assert.deepEqual(lineupItems(document), ["grace"]);
      assert.equal(fallbacks(document).length, 1);
      assert.match(fallbacks(document)[0], /count\/var/);
    },
  ],
};
