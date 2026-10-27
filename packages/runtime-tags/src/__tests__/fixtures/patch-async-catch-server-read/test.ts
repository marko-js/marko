import type { TestConfig } from "../../main.test";

// A `@catch` reading a request value and none of its error renders on the
// client at the first rejection; a later one keeps it, updating the value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { promise: Promise.resolve("ok"), title: "first" },
    { promise: Promise.reject(new Error("boom")), title: "second" },
    { promise: Promise.reject(new Error("bang")), title: "third" },
  ],
};
