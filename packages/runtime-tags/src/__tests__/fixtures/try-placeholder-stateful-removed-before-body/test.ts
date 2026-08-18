import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// The try is removed while its placeholder is live and the body still
// streaming: the placeholder dies with the try; the body must not revive it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait, flush],
};
