import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (container: Element) =>
      container.querySelector<HTMLButtonElement>("button")!.click(),
    (container: Element) =>
      container.querySelector<HTMLButtonElement>("button")!.click(),
  ],
};
