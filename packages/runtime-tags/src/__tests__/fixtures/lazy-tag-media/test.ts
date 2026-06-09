import type { TestConfig } from "../../main.test";
import { flushMedia, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, flushMedia, wait],
  equivalent: false,
};
