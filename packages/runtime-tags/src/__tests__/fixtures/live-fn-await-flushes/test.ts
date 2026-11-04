import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// patch-live-fn-await-flushes without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { x: 1, promise: Promise.resolve("p") },
    { x: 2, promise: resolveAfter("q") },
    wait,
  ],
};
