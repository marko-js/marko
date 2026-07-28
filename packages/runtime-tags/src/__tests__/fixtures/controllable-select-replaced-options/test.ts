import type { TestConfig } from "../../main.test";

function clickReload(document: Document) {
  document.querySelector<HTMLButtonElement>(".reload")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickReload],
};
