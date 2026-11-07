import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Content a lazy parent passes its nested lazy child reads the parent's state,
// so the child's resume data waits for the parent's data, and so its module.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
