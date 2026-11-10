import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A handler a lazy parent passes its nested lazy child is registered by the
// parent's module, so the child's resume data waits for it, which loads last.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
