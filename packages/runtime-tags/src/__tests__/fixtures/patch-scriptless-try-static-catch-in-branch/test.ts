import type { TestConfig } from "../../main.test";

// A static `@catch` inside a scriptless branch: the flush creating the try
// names it by id.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false },
    { show: true, promise: Promise.resolve("hi") },
    { show: true, promise: Promise.reject(new Error("boom")) },
  ],
};
