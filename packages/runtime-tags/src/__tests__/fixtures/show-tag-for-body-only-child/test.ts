import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.getElementById("t")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
