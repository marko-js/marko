import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, more, more],
};

function more(document: Document) {
  document.querySelector("button")!.click();
}
