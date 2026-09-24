import type { TestConfig } from "../../main.test";

// A `<try>` inside a caught `<try>`: the outer catch destroys the inner try
// too; the next flush's entries carry their creation payload and rebuild it.
export const config: TestConfig = {
  patches: true,
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
