import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const incRow = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.row")!.click();
};

export const config: TestConfig = {
  steps: [{}, inc, incRow],
};
