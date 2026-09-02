import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The dynamic-tag lazy path (_load_template) with a tag variable whose
// value is a nested tag's <return>.
export const config: TestConfig = {
  steps: [{}, mount, wait, wait, focus],
  equivalent: false,
};

function mount(document: Document) {
  document.querySelector<HTMLButtonElement>(".mount")!.click();
}
function focus(document: Document) {
  document.querySelector<HTMLButtonElement>(".focus")!.click();
}
