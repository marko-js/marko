import type { TestConfig } from "../../main.test";

function clickAll(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}

export const config: TestConfig = {
  steps: [{}, clickAll],
};
