import type { TestConfig } from "../../main.test";

function clickClass(document: Document) {
  (document.querySelector("#class") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClass, clickClass],
};
