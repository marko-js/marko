import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A resumed inner `<try>` with only a placeholder has no catch of its own, so
// a throw from its streamed body must reach the enclosing `@catch`.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click],
};
