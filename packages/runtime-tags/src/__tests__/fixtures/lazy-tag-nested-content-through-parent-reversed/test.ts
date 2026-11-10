import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The grand-child's content is made as the child renders its own content, the
// parent's code, so it waits for the parent's module too, which loads last.
export const config: TestConfig = {
  steps: [{}, wait, wait, wait, click],
  equivalent: false,
  load_order: [
    "grand-child.marko.load.mjs",
    "child.marko.load.mjs",
    "parent.marko.load.mjs",
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
