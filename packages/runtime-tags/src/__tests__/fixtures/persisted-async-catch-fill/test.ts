import type { TestConfig } from "../../main.test";

// `@catch` content on an interactive page renders client-side when the
// rejection frame lands: its server read delivers as a fill, so the title
// is the rejecting patch's, not the initial render's.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "first", promise: Promise.resolve("ok") },
    { title: "second", promise: Promise.reject(new Error("boom")) },
  ],
};
