import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: Promise.resolve("p") },
    { label: "b", promise: resolveAfter("q") },
    wait,
  ],
};
