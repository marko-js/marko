import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")?.click();

// A stateful placeholder resumes live while the body streams and is
// destroyed when the body swaps in.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait, flush, click],
};
