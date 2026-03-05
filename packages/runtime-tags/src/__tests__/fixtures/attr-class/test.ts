import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { c: true, d: true },
    { c: false, d: false },
  ],
};
