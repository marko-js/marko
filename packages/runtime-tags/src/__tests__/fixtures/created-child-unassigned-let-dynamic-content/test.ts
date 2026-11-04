import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, label: "a" },
    { show: true, label: "b" },
    { show: false, label: "c" },
    { show: true, label: "d" },
  ],
};
