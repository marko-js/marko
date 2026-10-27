import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, list: ["b", "c"] },
    { show: true, list: ["d"] },
  ],
};
