import type { TestConfig } from "../../main.test";

const increment = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const toggle = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment, toggle, increment, toggle, increment],
};
