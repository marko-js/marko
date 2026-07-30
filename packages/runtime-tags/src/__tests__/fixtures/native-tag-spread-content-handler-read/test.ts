import type { TestConfig } from "../../main";

function clickCheck(document: Document) {
  document.querySelector<HTMLButtonElement>("button.cap")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickCheck],
};
