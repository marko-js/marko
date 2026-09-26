import type { TestConfig } from "../../main.test";

const clickRow1 = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.row1")!.click();
};

const clickRow2 = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.row2")!.click();
};

const clickPrepend = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.prepend")!.click();
};

export const config: TestConfig = {
  steps: [{}, clickRow1, clickPrepend, clickRow2],
};
