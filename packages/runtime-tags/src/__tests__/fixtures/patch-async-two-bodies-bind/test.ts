import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

const click = (document: Document) => {
  const button = document.querySelector<HTMLButtonElement>("button")!;
  button.click();
  assert.equal(button.dataset.seen, button.title);
};

// Two await bodies settling in one chunk ship as two lines, the second
// carrying a handler reference that must resolve for the later line.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { first: Promise.resolve("a1"), second: Promise.resolve("b1") },
    click,
    navigate(() => ({ first: resolveAfter("a2"), second: resolveAfter("b2") })),
    wait,
    click,
  ],
};
