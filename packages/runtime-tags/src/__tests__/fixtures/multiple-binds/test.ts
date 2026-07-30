import type { TestConfig } from "../../main";

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, increment, increment],
};
