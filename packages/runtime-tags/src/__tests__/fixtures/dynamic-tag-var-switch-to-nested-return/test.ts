import type { TestConfig } from "../../main.test";

const clickInner = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inner")!.click();
};

const swap = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
};

export const config: TestConfig = {
  steps: [{}, clickInner, swap, clickInner, swap],
};
