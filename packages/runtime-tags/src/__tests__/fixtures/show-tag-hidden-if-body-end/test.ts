import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.getElementById("t")!.click();
}

function change(document: Document) {
  document.getElementById("i")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, change, change, toggle, toggle],
};
