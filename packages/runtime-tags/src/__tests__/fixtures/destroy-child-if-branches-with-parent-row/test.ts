import type { TestConfig } from "../../main.test";

function clear(document: Document) {
  document.querySelector<HTMLButtonElement>("#clear")!.click();
}

export const config: TestConfig = {
  steps: [{}, clear],
};
