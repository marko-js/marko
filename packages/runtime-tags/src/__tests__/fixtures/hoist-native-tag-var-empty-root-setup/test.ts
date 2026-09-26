import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { show: true, editable: true },
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
