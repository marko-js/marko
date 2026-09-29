import type { TestConfig } from "../../main.test";

// A static `@catch` inside a scriptless branch rides the try's slot as a
// content shell.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false },
    { show: true, promise: Promise.resolve("hi") },
    { show: true, promise: Promise.reject(new Error("boom")) },
  ],
};
