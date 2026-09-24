import type { TestConfig } from "../../main.test";
import { flush, flushRAF, wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")?.click();
}

// Resume leaves the lazy child inert until the in-order await completes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, click, flush, wait, flushRAF, click, flushRAF],
};
