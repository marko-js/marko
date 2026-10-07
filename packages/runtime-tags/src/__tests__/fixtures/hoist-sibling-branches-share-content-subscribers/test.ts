import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ a: true, b: true }, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
