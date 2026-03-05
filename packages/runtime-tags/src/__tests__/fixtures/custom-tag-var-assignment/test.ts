import type { TestConfig } from "../../main.test";

const increment_child = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc-child")!.click();
};

const increment_parent = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc-parent")!.click();
};

const reset = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.reset")!.click();
};

export const config: TestConfig = {
  steps: [{}, increment_child, increment_parent, reset],
};
