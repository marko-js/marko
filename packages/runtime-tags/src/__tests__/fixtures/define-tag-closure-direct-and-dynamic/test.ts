import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
