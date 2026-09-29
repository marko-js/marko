import type { TestConfig } from "../../main.test";

// A static `@catch` on a scriptless page rides the try's slot as a content
// shell; the rejection flush names it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    { promise: Promise.reject(new Error("boom")) },
  ],
};
