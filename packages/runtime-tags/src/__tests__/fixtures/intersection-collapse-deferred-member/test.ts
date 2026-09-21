import type { TestConfig } from "../../main.test";

function resolve(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, resolve],
};
