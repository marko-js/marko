import type { TestConfig } from "../../main";

const increment = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const reset = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.reset")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, increment, reset, increment],
};
