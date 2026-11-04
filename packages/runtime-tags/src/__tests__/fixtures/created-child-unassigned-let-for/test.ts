import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { on: false, items: ["a"] },
    { on: true, items: ["a", "b"] },
    { on: false, items: ["a"] },
    { on: true, items: ["c"] },
  ],
};
