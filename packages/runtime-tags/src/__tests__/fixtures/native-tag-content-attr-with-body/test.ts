import type { TestConfig } from "../../main.test";

function bump(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, bump],
};
