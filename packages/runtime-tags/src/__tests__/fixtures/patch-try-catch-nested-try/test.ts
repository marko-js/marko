import type { TestConfig } from "../../main.test";

// A `<try>` inside a caught `<try>`: the outer catch destroys the inner try
// too, and the next flush keeps the outer `@catch` without rebuilding it.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { check: () => "ok", promise: Promise.resolve("v1") },
    {
      check: () => {
        throw new Error("boom");
      },
      promise: Promise.resolve("v2"),
    },
    { check: () => "ok", promise: Promise.resolve("v3") },
  ],
};
