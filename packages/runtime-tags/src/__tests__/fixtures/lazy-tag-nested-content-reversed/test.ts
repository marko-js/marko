import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Content a lazy parent passes its nested lazy child names the parent's code,
// so the child's resume data waits for the parent's module, which loads last.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
