import type { TestConfig } from "../../main.test";

const increment = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, increment, increment],
};
