import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Content the page forwards through a lazy tag to its nested lazy child is in
// the page's bundle; the child's resume data still waits for the lazy tag's module.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
