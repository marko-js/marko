import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A client branch waiting on the parent's module leaves it unloaded, so the
// nested child's resume data still waits when another module's entry runs.
export const config: TestConfig = {
  steps: [{}, wait, toggle, wait, clickOther, wait, clickGo, wait, press],
  equivalent: false,
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function clickOther(document: Document) {
  document.querySelector<HTMLElement>("#other")!.click();
}

function clickGo(document: Document) {
  document.querySelector<HTMLElement>("#go")!.click();
}

function press(document: Document) {
  document.querySelector<HTMLButtonElement>(".press")!.click();
}
