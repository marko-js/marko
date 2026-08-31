import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
