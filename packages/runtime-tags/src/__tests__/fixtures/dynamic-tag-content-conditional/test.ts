import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (container: Element) =>
      container.querySelector<HTMLButtonElement>("#toggle")!.click(),
  ],
};
