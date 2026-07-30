import type { TestConfig } from "../../main";

const increment = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, increment, increment],
};
