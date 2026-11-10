import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Each row's nested lazy tag reads an object its lazy parent wrote: the ready
// stream waits once for the parent's payload, and the later rows queue behind it.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function click(document: Document) {
  const buttons = document.querySelectorAll<HTMLElement>("button.grand");
  for (const button of buttons) button.click();
}
