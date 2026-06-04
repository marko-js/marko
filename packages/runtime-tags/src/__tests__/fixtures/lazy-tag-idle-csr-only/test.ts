import type { TestConfig } from "../../main.test";
import { flushIdle, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushIdle, wait, { value: 2 }],
  equivalent: false,
  skip_ssr: true,
};
