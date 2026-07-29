import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// The mount effect of a freshly constructed panel runs EXACTLY once: its
// wire entry is elided (the construct pass queues it), so zero runs means
// the fragment is missing and two means the elision is.
const assertPanel = (runs: string, text: string, count: number) => {
  return (document: Document) => {
    const box = document.querySelector<HTMLElement>("div.box")!;
    assert.equal(box.dataset.runs, runs);
    assert.equal(box.textContent, text);
    assert.equal(document.querySelector("span.note")?.textContent, "fresh");
    assert.equal(
      document.querySelector("button.count")!.textContent,
      `clicked ${count}`,
    );
  };
};

export const config: TestConfig = {
  persisted: true,
  // The note genuinely cannot run in the browser, so a plain client render
  // of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "panel" } },
    assertPanel("1", "panel 0", 0),
    clickCount,
    assertPanel("1", "panel 1", 1),
    navigate({ $global: { persisted: true, view: "about" } }),
    navigate({ $global: { persisted: true, view: "panel" } }),
    assertPanel("1", "panel 1", 1),
    clickCount,
    assertPanel("1", "panel 2", 2),
  ],
};
