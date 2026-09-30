import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
  ],
};
