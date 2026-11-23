import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, toggle, wait, clickGo, wait],
  equivalent: false,
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function clickGo(document: Document) {
  document.querySelector<HTMLElement>("#go")!.click();
}
