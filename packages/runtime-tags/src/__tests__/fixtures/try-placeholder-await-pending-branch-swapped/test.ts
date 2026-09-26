import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const next = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Destroying the branch that holds a never-settling `<await>` releases the
// placeholder count it took, after the pending `<await>` swapped in takes one.
export const config: TestConfig = {
  steps: [{}, next, wait, next, wait],
};
