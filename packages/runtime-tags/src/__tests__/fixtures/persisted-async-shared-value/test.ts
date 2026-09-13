import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A value the response's first flush bound (two reads) that a later flush
// (the settled await) writes again: it references the binding, not a copy.
export const config: TestConfig = {
  persisted: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("x") },
    navigate(() => ({ label: "b", promise: resolveAfter("y") })),
  ],
};
