import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Each module's nested instance reads an object the other wrote, so each one's
// resume data waits for the other's payloads written so far, never for later ones.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
  load_order: ["b.marko.load.mjs", "a.marko.load.mjs"],
};

function click(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}
