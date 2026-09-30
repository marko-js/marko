import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The lazy child's effects wait while the try body streams, and outlive the
// catch that replaces only the body.
export const config: TestConfig = {
  steps: [{}, flush, wait, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
