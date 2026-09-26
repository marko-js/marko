import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A value that supersedes a pending one settles through the placeholder count
// the pending one took, even once the `@placeholder` is gone.
export const config: TestConfig = {
  steps: [{}, inc, flushRAF, inc, wait],
};
