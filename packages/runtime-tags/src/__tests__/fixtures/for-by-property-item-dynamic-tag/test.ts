import type { TestConfig } from "../../main.test";

// A keyed row renders its item as a dynamic tag, whose signal takes more than
// a value, so the loop's extra params must not reach it.
function add(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, add],
};
