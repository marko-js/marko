import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A nested lazy child's dynamic tag renders a native tag around its lazy
// parent's content, so it waits for the parent's module, which loads last.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
