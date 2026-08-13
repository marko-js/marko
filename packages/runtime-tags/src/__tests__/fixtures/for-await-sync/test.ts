import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: ["a", "b"] },
    (document: Document) => {
      document.querySelector("button")!.click();
    },
    { items: ["b", "a", "c"] },
  ],
};
