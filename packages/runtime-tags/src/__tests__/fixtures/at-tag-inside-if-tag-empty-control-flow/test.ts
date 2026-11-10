import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: true, list: [1] },
    { x: false, list: [1] },
    { x: true, list: [] },
  ],
};
