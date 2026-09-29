import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

export const config: TestConfig = {
  steps: [{}, inc, inc],
};
