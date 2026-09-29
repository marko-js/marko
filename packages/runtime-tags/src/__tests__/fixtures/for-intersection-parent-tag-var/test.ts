import type { TestConfig } from "../../main.test";

const clickRow1 = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.row1")!.click();
};

export const config: TestConfig = {
  steps: [{}, clickRow1],
};
