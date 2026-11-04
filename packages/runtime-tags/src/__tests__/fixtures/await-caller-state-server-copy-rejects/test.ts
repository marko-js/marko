import type { TestConfig } from "../../main.test";
import { rejectAfter, resolveAfter, wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: resolveAfter("a") },
    wait,
    { label: "b", promise: rejectAfter(new Error("server copy")) },
    wait,
  ],
};
