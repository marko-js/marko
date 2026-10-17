import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A throw in a new branch's setup, or in an `@catch` body's error param, reaches
// the nearest `<try>` around it: for an `@catch` body, the one outside its own.
export const config: TestConfig = {
  steps: [{}, click],
};
