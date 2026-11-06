import type { TestConfig } from "../../main.test";

// Each loop reading the same closure updates its rows in a slot of its own.
export const config: TestConfig = {
  steps: [{ first: [1, 2], second: [3, 4] }, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
