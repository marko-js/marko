import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")?.click();

// A stateful placeholder resumes live while the body streams and is
// destroyed when the body swaps in.
export const config: TestConfig = {
  // The first click hits the live server placeholder, which the client has not
  // mounted yet.
  skip_settled: true,
  equivalent: false,
  steps: [{}, click, wait, flush, click],
};
