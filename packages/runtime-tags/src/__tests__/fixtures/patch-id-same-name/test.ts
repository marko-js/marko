import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
