import type { TestConfig } from "../../main.test";

// patch-tag-define-calls-fill-structure without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "A", x: true, y: false },
    { a: "B", x: false, y: true },
    { a: "C", x: true, y: true },
  ],
};
