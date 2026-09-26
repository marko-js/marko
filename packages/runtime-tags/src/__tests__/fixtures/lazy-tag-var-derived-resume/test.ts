import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A value holding a lazily loaded tag's variable resumes with the tag's module,
// not in the main resume data that runs before the module registers. A
// registered function reading the variable holds only its scope, so it stays
// in the main resume data where its handler attaches.
export const config: TestConfig = {
  steps: [{}, wait, clickActions, clickInc, wait],
  equivalent: false,
};

function clickActions(document: Document) {
  document.querySelector<HTMLButtonElement>(".actions")!.click();
}
function clickInc(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}
