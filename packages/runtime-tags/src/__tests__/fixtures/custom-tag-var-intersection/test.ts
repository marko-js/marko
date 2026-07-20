import type { TestConfig } from "../../main.test";

const increment = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, increment, increment],
};
