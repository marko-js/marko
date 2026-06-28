import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, color: "red" },
    { show: false, color: "red" },
    { show: true, color: "blue" },
  ],
};
