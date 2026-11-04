import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.getElementById("t")!.click();
}

function toggleInner(document: Document) {
  document.getElementById("i")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggleInner, toggle, toggleInner, toggle],
};
