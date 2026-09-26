import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const start = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A pending `<await>` whose branch is destroyed in the flush its value settles
// in still releases its placeholder count.
export const config: TestConfig = {
  steps: [{}, start, wait, wait],
};
