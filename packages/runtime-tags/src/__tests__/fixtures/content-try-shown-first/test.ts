import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, id: "a" },
    { show: true, id: "b" },
    { show: false, id: "c" },
    { show: true, id: "d" },
  ],
};
