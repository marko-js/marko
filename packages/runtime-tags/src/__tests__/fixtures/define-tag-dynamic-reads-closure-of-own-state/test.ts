import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, toggle, toggle, toggle],
};

function toggle(document: Document) {
  document.querySelector("button")!.click();
}
