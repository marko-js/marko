import type { TestConfig } from "../../main.test";

function clickToggle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickToggle],
};
