import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ items: [{ on: true }, { on: false }] }, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
