import type { TestConfig } from "../../main.test";

// A static `@catch` on a scriptless page registers like any catch; the
// rejection flush names it by id.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    { promise: Promise.reject(new Error("boom")) },
  ],
};
