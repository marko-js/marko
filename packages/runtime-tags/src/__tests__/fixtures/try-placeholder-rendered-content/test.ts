import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Content rendered from a value goes pending wherever the client renders it,
// unless it is a template's own input content its caller wrote in place.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, wait],
};
