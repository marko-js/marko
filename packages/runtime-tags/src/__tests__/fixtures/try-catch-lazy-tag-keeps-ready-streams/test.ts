import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickOther(document: Document) {
  document.getElementById("other")!.click();
}

// The caught body's lazy content flushes after the catch, into the same ready
// streams the other lazy content uses.
export const config: TestConfig = {
  steps: [{}, flush, flush, wait, clickOther],
  equivalent: false,
};
