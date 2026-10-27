import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A placeholder a patch opens passes a function reading the page's value: the
// page's fill lands before the pending entry that creates it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("p") },
    navigate(() => ({ label: "b", promise: resolveAfter("q") })),
  ],
};
