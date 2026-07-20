import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, clear],
};

function clear(document: Document) {
  document.querySelector<HTMLButtonElement>("button#clear")!.click();
}
