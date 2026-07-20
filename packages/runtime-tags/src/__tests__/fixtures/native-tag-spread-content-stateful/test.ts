import type { TestConfig } from "../../main.test";

function clickIncrement(document: Document) {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickIncrement, clickIncrement],
};
