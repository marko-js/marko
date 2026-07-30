import type { TestConfig } from "../../main";

export const config: TestConfig = {
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
