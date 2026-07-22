import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function clickA(document: Document) {
  document.querySelectorAll("input")[0]!.click();
}
function clickReset(document: Document) {
  document.querySelector("button")!.click();
}

// After a native form reset, a two-way-bound radio group must restore to its
// default member ("b"), not clobber the bound value to undefined.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickA, clickReset, wait, wait],
};
