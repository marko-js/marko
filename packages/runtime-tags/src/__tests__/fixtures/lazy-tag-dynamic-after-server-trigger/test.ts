import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, clickGo, wait, toggle, wait],
  equivalent: false,
};

function clickGo(document: Document) {
  document.querySelector<HTMLElement>("#go")!.click();
}

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}
