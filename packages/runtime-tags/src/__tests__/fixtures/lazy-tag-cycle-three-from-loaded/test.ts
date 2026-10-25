import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

// A load-imports B, B imports C and C imports A, entered at B.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, wait, click, flushRAF, click, flushRAF],
};

function click(document: Document) {
  for (const b of document.querySelectorAll<HTMLButtonElement>("button"))
    b.click();
}
