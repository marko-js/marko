import type { TestConfig } from "../../main.test";

const click = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  steps: [{}, click, click],
};
