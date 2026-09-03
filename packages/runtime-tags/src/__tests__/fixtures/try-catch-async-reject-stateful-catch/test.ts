import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A catch that fires after the body went async ships the try's slots with
// its own content, since the stateful catch is resumed on the client.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click],
};
