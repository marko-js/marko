import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { on: false, n: 1 },
    { on: true, n: 2 },
    wait,
    { on: true, n: 3 },
    wait,
  ],
};
