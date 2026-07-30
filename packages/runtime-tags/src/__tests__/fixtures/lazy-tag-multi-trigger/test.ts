import type { TestConfig } from "../../main";
import { flushIdle, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushIdle, wait],
  equivalent: false,
};
