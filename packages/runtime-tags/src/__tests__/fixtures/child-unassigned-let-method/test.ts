import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, list: ["a"] },
    { show: true, list: ["b", "c"] },
    { show: true, list: ["d"] },
  ],
};
