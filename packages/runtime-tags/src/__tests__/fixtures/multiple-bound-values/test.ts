import type { TestConfig } from "../../main.test";

function clickAllButtons(document: Document) {
  document.querySelectorAll("button")!.forEach((item) => item.click());
}

export const config: TestConfig = {
  steps: [{}, clickAllButtons, clickAllButtons, clickAllButtons],
};
