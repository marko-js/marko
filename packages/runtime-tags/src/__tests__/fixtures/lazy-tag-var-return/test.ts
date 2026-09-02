import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazily loaded tag that takes an attribute and has a tag variable,
// mounted after resume: its setup lands in a later run than its input
// chunks, and the nested tag's <let> and <return> must still apply.
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
