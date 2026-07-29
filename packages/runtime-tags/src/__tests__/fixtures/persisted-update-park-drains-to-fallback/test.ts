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

// While ANY lazy load is unresolved — even one a previous navigation
// started — a loader-less dispatch may still gain its registration from it,
// so judgment defers: the dispatch parks. Once the last load settles the
// parked queue re-decides and a still-undeliverable id fails closed,
// deterministically, in the same flush.
const swapTickerForVarId = {
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
  // The mutated frame targets the debug renderer id; optimize encodes ids.
  skip_optimize: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      title: "First",
      performers: ["ada", "grace"],
      view: "ticker",
      entries: ["est", "cet"],
      $global: { persisted: true },
    },
    clickCount,
    // Navigation N consumes the escaped lineup loader; the load stays gated.
    navigate({
      title: "Second",
      performers: ["ada", "grace", "alan"],
      view: "ticker",
      entries: ["est", "cet"],
      $global: { persisted: true },
    }),
    (document: Document) => {
      assert.equal(deferred(document).length, 1);
      assert.equal(fallbacks(document).length, 0);
    },
    // Navigation N+1 dispatches an id that can never gain a merge, while
    // N's load still flies: judgment must defer (park), not fall back.
    navigate(
      {
        title: "Third",
        performers: ["grace"],
        view: "ticker",
        entries: ["est", "cet", "ist"],
        $global: { persisted: true },
      },
      swapTickerForVarId,
    ),
    (document: Document) => {
      assert.equal(fallbacks(document).length, 0);
    },
    // The load settles: the lineup park applies with the NEWEST patch, and
    // the drained queue fails the undeliverable id closed — exactly once.
    (document: Document) => deferred(document)[0].release(),
    wait,
    (document: Document) => {
      assert.deepEqual(lineupItems(document), ["grace"]);
      assert.equal(fallbacks(document).length, 1);
      assert.match(fallbacks(document)[0], /count\/var/);
    },
  ],
};
