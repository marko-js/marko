import type { TestConfig } from "../../main.test";

function clickInc(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{ show: true }, clickInc],
};
