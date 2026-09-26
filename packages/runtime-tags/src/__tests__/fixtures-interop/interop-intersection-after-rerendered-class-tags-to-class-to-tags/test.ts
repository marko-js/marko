import type { TestConfig } from "../../main.test";

// The class child re-renders its tags child before that child's own state
// change renders in the same update.
export const config: TestConfig = {
  steps: [{}, clickAll, clickAll],
};

function clickAll(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}
