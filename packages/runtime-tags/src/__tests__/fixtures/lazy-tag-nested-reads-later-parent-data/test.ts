import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The second child reads a value the parent writes later, so it waits again,
// and the third after the parent's effects-only batches, which add no payload.
export const config: TestConfig = {
  steps: [{}, wait, flush, wait, flush, wait, click],
  equivalent: false,
  load_order: ["child.marko.load.mjs", "parent.marko.load.mjs"],
};

function click(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}
