import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A nested lazy child spreads its lazy parent's content into a native tag, so
// its resume data waits for the parent's module, which loads last.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
