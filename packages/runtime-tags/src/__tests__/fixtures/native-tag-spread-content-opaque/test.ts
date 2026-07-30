import type { TestConfig } from "../../main";

function clickToggle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickToggle],
};
