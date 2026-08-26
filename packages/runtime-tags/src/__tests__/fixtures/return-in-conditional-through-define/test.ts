import type { TestConfig } from "../../main.test";

function clickToggle(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickToggle, clickToggle, clickToggle],
};
