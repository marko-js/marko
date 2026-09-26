import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazily loaded tag that writes no scope of its own still updates its tag
// variable in the resumed parent.
export const config: TestConfig = {
  steps: [{}, wait, click, wait],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
