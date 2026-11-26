import type { TestConfig } from "../../main.test";

function clickToggle(document: Document) {
  (document.getElementById("toggle") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickToggle],
};
