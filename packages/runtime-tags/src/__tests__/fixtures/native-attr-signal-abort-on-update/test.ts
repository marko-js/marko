import type { TestConfig } from "../../main.test";

function inc(document: Document) {
  document.getElementById("inc")!.click();
}

function hide(document: Document) {
  document.getElementById("hide")!.click();
}

export const config: TestConfig = {
  steps: [{}, inc, inc, inc, hide],
};
