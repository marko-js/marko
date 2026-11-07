import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The page wrote the lazy parent's scope, so the nested child's resume data waits
// only because it names the change handler the parent's module registers.
export const config: TestConfig = {
  steps: [{}, wait, wait, clickGrandChild, clickPage],
  equivalent: false,
  load_order: ["grand-child.marko.load.mjs", "child.marko.load.mjs"],
};

function clickGrandChild(document: Document) {
  document.querySelector<HTMLButtonElement>(".grand-child")!.click();
}

function clickPage(document: Document) {
  document.querySelector<HTMLButtonElement>(".page")!.click();
}
