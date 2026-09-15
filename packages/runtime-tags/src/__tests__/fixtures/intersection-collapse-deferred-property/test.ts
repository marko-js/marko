import type { TestConfig } from "../../main.test";

function clickGo(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickGo],
};
