import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, update],
};

function update(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
