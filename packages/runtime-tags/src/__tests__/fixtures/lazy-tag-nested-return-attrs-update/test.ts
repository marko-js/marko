import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An attribute re-set before the module lands replaces its buffered entry
// (last value wins in the batch); one set after it goes straight through.
export const config: TestConfig = {
  steps: [{}, mount, inc, wait, wait, inc, focus],
  equivalent: false,
};

function mount(document: Document) {
  document.querySelector<HTMLButtonElement>(".mount")!.click();
}
function inc(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}
function focus(document: Document) {
  document.querySelector<HTMLButtonElement>(".focus")!.click();
}
