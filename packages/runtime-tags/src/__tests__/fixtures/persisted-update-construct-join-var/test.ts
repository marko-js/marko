import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

// A constructed panel with a child `<return>`→var chain feeding a two-source
// join (`${tally} of ${limit}`): construction must adopt the joined fill,
// re-establish the var wiring, and keep both join contributors live for
// post-construct interactions (child-side tap, parent-side raise).
const assertReadout = (readout: string, count: number) => {
  return (document: Document) => {
    assert.equal(document.querySelector("p.readout")?.textContent, readout);
    assert.equal(
      document.querySelector("button.count")!.textContent,
      `clicked ${count}`,
    );
  };
};

export const config: TestConfig = {
  persisted: true,
  // The unit label genuinely cannot run in the browser, so a plain client
  // render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "tools", start: 3 } },
    assertReadout("6 of 10", 0),
    clickCount,
    navigate({ $global: { persisted: true, view: "about", start: 3 } }),
    clickCount,
    navigate({ $global: { persisted: true, view: "tools", start: 4 } }),
    assertReadout("8 of 10", 2),
    (document: Document) => {
      assert.equal(document.querySelector("span.unit")?.textContent, "widgets");
    },
    // Child-side contributor: tap flows through the re-wired var chain.
    click("button.tap"),
    assertReadout("10 of 10", 2),
    // Parent-side contributor: the join fires into the constructed scope.
    click("button.raise"),
    assertReadout("10 of 15", 2),
  ],
};
