import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 2, c: 3 },
    { a: 4, b: 5, c: 3 },
    { a: 4, b: 5, c: 6 },
  ],
};
