import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { attrs: { class: "x" } },
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
