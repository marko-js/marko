import type { TestConfig } from "../../main.test";

const increment = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const assign = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.assign")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, assign, increment],
};
