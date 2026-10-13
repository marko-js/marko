import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
