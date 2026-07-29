import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const flagged = (document: Document) => !!document.querySelector("p.flagged");
const fallbacks = (document: Document): string[] =>
  (document.defaultView as any).__persistedNavFallbacks || [];

// A generated merge runs its statements in sequence — a dynamic dispatch,
// then a request-derived conditional. When the dispatch fails and latches
// the fallback, the latch unwinds the WHOLE merge: the conditional after
// it must not flip while the transport replaces the document.
const swapTickerForVarId = {
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
      flag: false,
      $global: { persisted: true },
    },
    clickCount,
    navigate(
      {
        title: "Second",
        view: "ticker",
        entries: ["est", "cet", "ist"],
        flag: true,
        $global: { persisted: true },
      },
      swapTickerForVarId,
    ),
    (document: Document) => {
      assert.equal(fallbacks(document).length, 1);
      assert.match(fallbacks(document)[0], /count\/var/);
      assert.equal(flagged(document), false);
    },
  ],
};
