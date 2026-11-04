import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The plain twin of `patch-try-pending-server-copy-sibling-flush`: the
// renders main gives.
export const config: TestConfig = {
  // A client render starts its awaits pending; the document streams them.
  equivalent: false,
  steps: () => [
    { label: "a", promise: Promise.resolve("a"), other: Promise.resolve("o1") },
    wait,
    { label: "b", promise: Promise.resolve("b"), other: Promise.resolve("o2") },
    wait,
  ],
};
