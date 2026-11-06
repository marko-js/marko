import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { p1: false, p2: 0 },
    { p1: false, p2: 6 },
    { p1: false, p2: 0 },
  ],
};
