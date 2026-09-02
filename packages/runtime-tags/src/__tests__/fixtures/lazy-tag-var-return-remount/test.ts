import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Mounted and unmounted before the module lands, then mounted again once
// it is cached: the cached insert is queued behind the owner's setup, so
// the attribute is in the batch and the nested <return> still arrives.
export const config: TestConfig = {
  steps: [{}, toggle, toggle, wait, toggle, wait, focus, toggle, toggle, focus],
  equivalent: false,
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}
function focus(document: Document) {
  document.querySelector<HTMLButtonElement>(".focus")!.click();
}
