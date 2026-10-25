import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

// A load-imports B and B imports A, entered at B: A's module evaluates before B's,
// so its wrapper reads B as it renders, and A's client tag closing the cycle
// renders through the import's `_load_template`.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, wait, click, flushRAF, click, flushRAF],
};

function click(document: Document) {
  for (const b of document.querySelectorAll<HTMLButtonElement>("button"))
    b.click();
}
