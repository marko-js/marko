import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, { value: 2 }],
  equivalent: false,
};
