import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")?.click();

// A placeholder rendered after its owner flushed reads client state: its
// resumed subscription keeps it live while the body streams.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait, flush, click],
};
