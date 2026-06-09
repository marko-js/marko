import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushVisible, wait],
  equivalent: false,
};
