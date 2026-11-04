import type { TestConfig } from "../../main.test";

// An `<await>` body's value a function passed to a child captures.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { v: Promise.resolve("a") },
    { v: Promise.resolve("b") },
    { v: Promise.resolve("b") },
  ],
};
