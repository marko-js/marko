import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Each row's nested lazy tag renders its lazy parent's content: the ready stream
// waits for the parent's module once, and the later rows queue behind that wait.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}
