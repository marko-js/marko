import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, on: true, label: "a" },
    { show: true, on: true, label: "b" },
  ],
};
