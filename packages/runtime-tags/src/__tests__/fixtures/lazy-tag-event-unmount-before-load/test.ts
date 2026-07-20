import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, toggle, clickLoad, wait, toggle, clickLoad, wait, incClick],
  equivalent: false,
};

function toggle(document: Document) {
  document.querySelector<HTMLElement>("#toggle")!.click();
}

function clickLoad(document: Document) {
  document.querySelector<HTMLElement>("#load")!.click();
}

function incClick(document: Document) {
  document.querySelector<HTMLElement>("#inc")!.click();
}
