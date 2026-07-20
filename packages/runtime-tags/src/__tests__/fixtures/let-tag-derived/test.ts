import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{ a: 2 }, click, { a: 3 }, click],
};
