import type { TestConfig } from "../../main.test";
import { flushHas, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, flushHas, wait],
  equivalent: false,
};
