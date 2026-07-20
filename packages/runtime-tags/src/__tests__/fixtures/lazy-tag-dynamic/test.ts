import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait, clickInc, clickToggle, clickToggle, wait, clickInc],
  equivalent: false,
};

function clickToggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function clickInc(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}
