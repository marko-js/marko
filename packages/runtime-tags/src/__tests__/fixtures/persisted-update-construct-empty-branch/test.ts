import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickFlip = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.flip")!.click();

// A state-only `<if>` whose selected branch is the EMPTY `<else/>` inside a
// freshly constructed panel: nothing renders for the branch (there is no
// wire shell for an empty body — construct id 0), the surrounding fills
// still apply, and a post-construct flip creates the content branch through
// the ordinary client render path.
const assertPanel = (msg: string | undefined, count: number) => {
  return (document: Document) => {
    assert.equal(document.querySelector("p.msg")?.textContent, msg);
    assert.equal(document.querySelector("span.badge")?.textContent, "beta");
    assert.equal(
      document.querySelector("button.count")!.textContent,
      `clicked ${count}`,
    );
  };
};

export const config: TestConfig = {
  persisted: true,
  // The badge genuinely cannot run in the browser, so a plain client render
  // of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "panel", on: true } },
    assertPanel("msg 0", 0),
    clickCount,
    navigate({ $global: { persisted: true, view: "about", on: true } }),
    navigate({ $global: { persisted: true, view: "panel", on: false } }),
    assertPanel(undefined, 1),
    clickFlip,
    assertPanel("msg 1", 1),
    clickFlip,
    assertPanel(undefined, 1),
  ],
};
