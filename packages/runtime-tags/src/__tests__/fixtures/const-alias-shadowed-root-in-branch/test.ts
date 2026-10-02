import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { x: 1 },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button")!.click(),
  ],
};
