import type { TestConfig } from "../../main.test";
import { flush, flushRAF, wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    wait,
    flush,
    flush,
    flush,
    flush,
    flush,
    flushRAF,
    wait,
    flushRAF,
    wait,
  ],
};
