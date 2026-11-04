import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
