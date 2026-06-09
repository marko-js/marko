import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait],
  skip_optimize: true,
  equivalent: false,
};
