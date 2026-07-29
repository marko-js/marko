import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const tickerItems = (document: Document, index: number) => {
  const lists = document.querySelectorAll<HTMLOListElement>(
    "ol.ticker, ol.ticker2",
  );
  return [...lists[index].querySelectorAll("li")].map((li) => li.textContent);
};
const fallbacks = (document: Document): string[] =>
  (document.defaultView as any).__persistedNavFallbacks || [];

// A generated merge dispatches its anchors back to back. When the FIRST
// dispatch fails synchronously (undeliverable id, nothing in flight) and
// latches the fallback, the SECOND dispatch in the same merge must not
// keep mutating the page — the transport is replacing the document.
const swapFirstTickerForVarId = {
  mutateFrames: (frames: string[]) =>
    frames.map((frame) =>
      frame.replace(
        /("ConditionalRenderer:[^"]*":(?:_\.[a-z]=)?"[^"]*)\/tags\/ticker\.marko"/,
        '$1/template.marko_0_count/var"',
      ),
    ),
};

export const config: TestConfig = {
  persisted: true,
  // The mutated frame targets the debug renderer id; optimize encodes ids.
  skip_optimize: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      title: "First",
      view: "ticker",
      entries: ["est", "cet"],
      entriesB: ["utc"],
      $global: { persisted: true },
    },
    clickCount,
    navigate(
      {
        title: "Second",
        view: "ticker",
        entries: ["est", "cet", "ist"],
        entriesB: ["utc", "gmt"],
        $global: { persisted: true },
      },
      swapFirstTickerForVarId,
    ),
    (document: Document) => {
      assert.equal(fallbacks(document).length, 1);
      assert.match(fallbacks(document)[0], /count\/var/);
      assert.deepEqual(tickerItems(document, 0), ["est", "cet"]);
      assert.deepEqual(tickerItems(document, 1), ["utc"]);
    },
  ],
};
