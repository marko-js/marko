import type { TestConfig } from "../../main.test";

function clickZero(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickZero],
};
