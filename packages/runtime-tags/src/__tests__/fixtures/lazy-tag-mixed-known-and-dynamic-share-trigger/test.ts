import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, showTag, wait, clickGo, wait, showDynamic, wait],
  equivalent: false,
};

function showTag(document: Document) {
  document.querySelector<HTMLButtonElement>(".show-tag")!.click();
}

function clickGo(document: Document) {
  document.querySelector<HTMLElement>("#go")!.click();
}

function showDynamic(document: Document) {
  document.querySelector<HTMLButtonElement>(".show-dynamic")!.click();
}
