import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The body's `<await>` of a server param writes its `@catch` when it rejects, though
// its content reads only the body's value: a paired render waits for the copy.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { promise: Promise.resolve("a"), other: Promise.resolve("o") },
    wait,
    { promise: Promise.resolve("b"), other: Promise.reject(new Error("boom")) },
    wait,
  ],
};
