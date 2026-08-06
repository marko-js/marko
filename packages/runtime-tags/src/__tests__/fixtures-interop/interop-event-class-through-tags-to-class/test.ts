import type { TestConfig } from "../../main.test";

function clickClassChild(document: Document) {
  (document.querySelector("#class-child") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClassChild, clickClassChild],
};
