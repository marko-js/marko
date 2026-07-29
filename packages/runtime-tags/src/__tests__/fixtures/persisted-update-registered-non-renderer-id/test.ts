import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const tickerItems = (document: Document) =>
  [...document.querySelectorAll("ol.ticker li")].map((li) => li.textContent);

// The other deploy-skew dispatch miss: the dispatched id names something
// this page DID register (a `<let>`'s var record), so it passes the
// known-id test yet can never gain an update merge or a loader — the route
// entry's modules are fully evaluated before frames apply. Parking would
// hang the navigation forever; it must complete as a document load.
// Only the renderer-selection fill is rewritten — the wire shell and branch
// scopes stay intact, so the dispatch reaches the same-page merge lookup
// (diverged id, no shell for it) instead of the fresh-construct paths.
const swapRendererForVarId = {
  mutateFrames: (frames: string[]) =>
    frames.map((frame) =>
      frame.replace(
        /(_\.a="[^"]*)\/tags\/ticker\.marko"/g,
        '$1/template.marko_0_count/var"',
      ),
    ),
};

const assertStaleTicker = (document: Document) => {
  assert.deepEqual(tickerItems(document), ["est", "cet"]);
};
const assertDocumentFallback = (document: Document) => {
  const fallbacks = (document.defaultView as any).__persistedNavFallbacks;
  assert.equal(fallbacks?.length, 1);
  assert.match(fallbacks[0], /_0_count\/var/);
};

export const config: TestConfig = {
  persisted: true,
  // The mutated frame targets the debug renderer id; optimize encodes ids.
  skip_optimize: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      title: "Zones",
      view: "ticker",
      entries: ["est", "cet"],
      $global: { persisted: true },
    },
    clickCount,
    navigate(
      {
        title: "More Zones",
        view: "ticker",
        entries: ["est", "cet", "ist"],
        $global: { persisted: true },
      },
      swapRendererForVarId,
    ),
    assertStaleTicker,
    assertDocumentFallback,
    clickCount,
  ],
};
