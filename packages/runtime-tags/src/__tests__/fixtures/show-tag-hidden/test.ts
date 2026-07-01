import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  steps: [
    {},
    (c: Element) => c.querySelector<HTMLButtonElement>("button")!.click(),
    (c: Element) => c.querySelector<HTMLButtonElement>("button")!.click(),
  ],
};
