import type { TestConfig } from "../../main.test";

// The document's await rejected into the `@catch`, which the reorder put in
// the body's place; later patches keep it, resolving or rejecting again.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.reject(new Error("a")) },
    { promise: Promise.resolve("hi") },
    { promise: Promise.reject(new Error("b")) },
  ],
};
