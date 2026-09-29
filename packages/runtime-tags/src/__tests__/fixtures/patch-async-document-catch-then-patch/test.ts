import type { TestConfig } from "../../main.test";

// The document's await rejected into the `@catch`, which the reorder put in
// the body's place; a patch that resolves it rebuilds the try.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.reject(new Error("a")) },
    { promise: Promise.resolve("hi") },
    { promise: Promise.reject(new Error("b")) },
  ],
};
