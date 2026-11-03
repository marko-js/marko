import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a", items: [] },
    { show: true, label: "b", items: [] },
  ],
};
