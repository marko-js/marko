import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Each lazy module renders content the other made, so each one's resume data
// waits for the other's module, never for data that waits on its own.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["b.marko.load.mjs", "a.marko.load.mjs"],
};

function click(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}
