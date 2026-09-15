import type { TestConfig } from "../../main.test";

// Two dynamic tags with the same body: one picked by input, one by state.
export const config: TestConfig = {
  steps: [
    { tag: "div", foo: "a" },
    (container: Document) => container.querySelector("button")!.click(),
  ],
};
