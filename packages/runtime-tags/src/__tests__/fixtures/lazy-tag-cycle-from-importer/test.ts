import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

// As `lazy-tag-cycle-from-loaded`, entered at A: B's module evaluates first.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, wait, click, flushRAF, click, flushRAF],
};

function click(document: Document) {
  for (const b of document.querySelectorAll<HTMLButtonElement>("button"))
    b.click();
}
