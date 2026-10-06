import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy child returns a nested tag's value: what reads it with another value
// updates in one render, once loaded and once remounted from the cached module.
export const config: TestConfig = {
  steps: [{}, toggle, wait, wait, inc, inc, toggle, toggle, inc],
  equivalent: false,
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
}
function inc(document: Document) {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
}
