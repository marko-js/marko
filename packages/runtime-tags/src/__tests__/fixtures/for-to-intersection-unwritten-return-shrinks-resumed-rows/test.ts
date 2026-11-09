import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ short: false }, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
