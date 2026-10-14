import type { TestConfig } from "../../main.test";

// A child template's await under the page's `<try>`: once a rejection shows
// the `@catch`, a patch whose await resolves leaves it in place.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve("one") },
    { promise: Promise.reject(new Error("boom")) },
    { promise: Promise.resolve("three") },
  ],
};
