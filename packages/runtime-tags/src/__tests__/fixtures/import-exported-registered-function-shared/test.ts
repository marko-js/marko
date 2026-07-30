import type { TestConfig } from "../../main";

function clickBoth(document: Document) {
  document.querySelectorAll("button").forEach((button) => button.click());
}

export const config: TestConfig = {
  steps: [{}, clickBoth],
};
