import type { TestConfig } from "../../main.test";

// A scriptless page's await body renders a child tag: the body record
// composes the child's template, so the settle constructs it.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { show: false, promise: Promise.resolve("one") },
    { show: true, promise: Promise.resolve("one") },
    { show: true, promise: Promise.resolve("two") },
  ],
};
