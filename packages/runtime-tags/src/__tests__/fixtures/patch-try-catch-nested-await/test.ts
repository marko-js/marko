import type { TestConfig } from "../../main.test";

// An await inside an await inside a `<try>`: once the outer await rejects
// into the `@catch`, a patch settling both keeps it in place.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { a: Promise.resolve("a1"), b: Promise.resolve("b1") },
    { a: Promise.reject(new Error("boom")), b: Promise.resolve("b2") },
    { a: Promise.resolve("a3"), b: Promise.resolve("b3") },
  ],
};
