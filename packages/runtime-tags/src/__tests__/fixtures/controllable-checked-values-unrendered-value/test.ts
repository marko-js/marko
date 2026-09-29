import type { TestConfig } from "../../main.test";

function clickB(document: Document) {
  document.querySelector<HTMLInputElement>(`input[value=b]`)!.click();
}

export const config: TestConfig = {
  steps: [{}, clickB],
};
