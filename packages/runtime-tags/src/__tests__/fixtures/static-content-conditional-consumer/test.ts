import type { TestConfig } from "../../main";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("button#toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
