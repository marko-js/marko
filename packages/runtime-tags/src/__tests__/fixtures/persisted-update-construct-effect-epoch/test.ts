import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// The navigate-during-flush race, deterministically: the frame constructs
// the panel (queueing its mount effect), then a matched refresh effect
// vetoes — the render phase destroys the freshly constructed branch before
// the effect queue drains, and the removed scope's effect must run ZERO
// times (body.dataset.panelRuns stays at the first panel's count).
export const config: TestConfig = {
  persisted: true,
  // The note genuinely cannot run in the browser, so a plain client render
  // of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "panel" } },
    (document: Document) => {
      assert.equal(document.body.dataset.panelRuns, "1");
    },
    clickCount,
    navigate({ $global: { persisted: true, view: "about" } }),
    navigate({
      $global: {
        persisted: true,
        view: "panel",
        veto: true,
        serializedGlobals: { veto: true },
      },
    }),
    (document: Document) => {
      assert.equal(document.querySelector("div.box"), null);
      assert.equal(document.body.dataset.panelRuns, "1");
      assert.equal(
        document.querySelector("button.count")!.textContent,
        "clicked 1",
      );
    },
  ],
};
