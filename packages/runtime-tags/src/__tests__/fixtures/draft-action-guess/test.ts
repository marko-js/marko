import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A draft guessed in an act shows at once and holds while the act is pending;
// the source confirming the guess when the act settles costs no DOM work.
export const config: TestConfig = {
  steps: [{}, click, wait],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
