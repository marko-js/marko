import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { on: false, n: 0 },
    { on: true, n: 1 },
    { on: false, n: 1 },
    { on: true, n: 2 },
  ],
};
