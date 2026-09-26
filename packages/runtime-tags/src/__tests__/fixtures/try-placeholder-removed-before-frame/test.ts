import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A `@placeholder` removed before its frame still shows the one that was
// present when the value went pending.
export const config: TestConfig = {
  steps: [{}, inc, inc, wait],
};
