import type { TestConfig } from "../../main.test";

function clickChild(document: Document) {
  (document.querySelector("#child") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickChild, clickChild],
};
