import type { TestConfig } from "../../main.test";

// A caught `<try>` keeps its `@catch` through a navigation that throws again,
// with nothing reloading; created anew, it renders its body, then catches anew.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, fail: true },
    { show: true, fail: true },
    {},
    { show: true },
    { show: true, fail: true },
    { show: true, fail: true },
  ],
};
