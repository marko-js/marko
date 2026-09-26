import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazily loaded tag returning a value that needs none of its own scope, loaded
// after resume: the value, and one holding it, reach the resumed parent with the
// module.
export const config: TestConfig = {
  steps: [{}, load, wait, call],
  equivalent: false,
};

function load(document: Document) {
  document.querySelector<HTMLButtonElement>(".load")!.click();
}
function call(document: Document) {
  document.querySelector<HTMLButtonElement>(".call")!.click();
}
