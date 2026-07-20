import type { TestConfig } from "../../main.test";

const increment = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const assign = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.assign")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, assign, increment],
};
