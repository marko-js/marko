import type { TestConfig } from "../../main.test";

const clickOnce = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.once")!.click();
};

const clickTwice = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.twice")!.click();
};

export const config: TestConfig = {
  steps: [{}, clickOnce, clickOnce, clickTwice, clickTwice, clickTwice],
};
