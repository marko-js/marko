import type { TestConfig } from "../../main.test";

// patch-capture-await-param without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { v: Promise.resolve("a") },
    { v: Promise.resolve("b") },
    { v: Promise.resolve("b") },
  ],
};
