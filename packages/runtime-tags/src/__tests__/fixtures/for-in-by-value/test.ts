import type { TestConfig } from "../../main.test";

// Keyed by value, a row's key and value both come from its loop on update.
function change(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, change],
};
