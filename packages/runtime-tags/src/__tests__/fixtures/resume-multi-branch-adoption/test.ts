import type { TestConfig } from "../../main";

export const config: TestConfig = {
  steps: [{}, clear],
};

function clear(document: Document) {
  document.querySelector<HTMLButtonElement>("button#clear")!.click();
}
