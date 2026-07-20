import type { TestConfig } from "../../main.test";

function clickA(document: Document) {
  document.querySelector<HTMLButtonElement>("button.a")!.click();
}

function clickB(document: Document) {
  document.querySelector<HTMLButtonElement>("button.b")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickA, clickB],
};
