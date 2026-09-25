import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  for (const button of document.querySelectorAll<HTMLButtonElement>(
    ".toggle",
  )) {
    button.click();
  }
}

function swap(document: Document) {
  document.querySelector<HTMLButtonElement>("#swap")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, swap, toggle],
};
