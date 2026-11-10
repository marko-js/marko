import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A nested lazy tag's own content and handlers are in its own module; its
// resume data still waits for its lazy parent's module, which loads last.
export const config: TestConfig = {
  steps: [{}, wait, wait, clickCount, clickAdd],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function clickCount(document: Document) {
  document.querySelectorAll("button")[0].click();
}

function clickAdd(document: Document) {
  document.querySelectorAll("button")[1].click();
}
