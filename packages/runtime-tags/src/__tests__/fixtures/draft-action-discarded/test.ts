import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A guess the act's failure never confirms is discarded when the act settles:
// the draft shows its source again.
export const config: TestConfig = {
  steps: [{}, click, wait],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
