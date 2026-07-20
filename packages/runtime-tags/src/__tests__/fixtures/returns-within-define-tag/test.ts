import type { TestConfig } from "../../main.test";

const clickOnce = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.once")!.click();
};

const clickTwice = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.twice")!.click();
};

export const config: TestConfig = {
  steps: [{}, clickOnce, clickOnce, clickTwice, clickTwice, clickTwice],
};
