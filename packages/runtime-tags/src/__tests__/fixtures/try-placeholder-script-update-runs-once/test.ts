import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Queued by two updates while the `<try>` awaits, a body effect runs once
// when the body returns.
export const config: TestConfig = {
  steps: [{}, inc, inc, wait],
};
