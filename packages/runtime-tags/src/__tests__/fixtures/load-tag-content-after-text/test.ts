import type { TestConfig } from "../../main.test";
import { flushRAF } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A lazily loaded template renders its content in a chunk of its own, after
// the text before it; the browser renders it once its assets load.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, click, flushRAF],
};
