import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A body throws as its await settles, with a nested placeholder still to render
// in a later pass; the `@catch` cuts it, so its state never reaches the page.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait, click],
};
