import type { TestConfig } from "../../main";

function click(document: Document) {
  document.querySelector("style")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
