import type { TestConfig } from "../../main.test";

function open(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, open],
};
