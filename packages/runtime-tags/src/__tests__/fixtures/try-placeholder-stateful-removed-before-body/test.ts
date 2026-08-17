import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// The whole try goes away while its stateful placeholder is still live and
// the body still streaming: the placeholder is torn down with the try, and
// the body landing afterwards must not revive or crash on it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait, flush],
};
