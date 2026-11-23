import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, toggle, wait, clickFirst, wait, clickSecond, wait, clickCount],
  equivalent: false,
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function clickFirst(document: Document) {
  document.querySelector<HTMLElement>("#first")!.click();
}

function clickSecond(document: Document) {
  document.querySelector<HTMLElement>("#second")!.click();
}

function clickCount(document: Document) {
  document.querySelector<HTMLButtonElement>(".count")!.click();
}
