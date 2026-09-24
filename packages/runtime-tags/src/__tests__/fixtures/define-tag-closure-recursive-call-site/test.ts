import type { TestConfig } from "../../main.test";

function deeper(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, deeper, deeper],
};
