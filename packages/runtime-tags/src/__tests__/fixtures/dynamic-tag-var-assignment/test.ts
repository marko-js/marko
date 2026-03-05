import type { TestConfig } from "../../main.test";

const increment = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const reset = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.reset")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, increment, reset, increment],
};
