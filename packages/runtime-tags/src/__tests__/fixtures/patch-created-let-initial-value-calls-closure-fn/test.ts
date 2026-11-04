import type { TestConfig } from "../../main.test";

// patch-created-let-initial-value-calls-fn with the call in a nested branch: the
// outer `<let>` takes the fill, so the intersection sets up to compute the inner one.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, inner: true, v: "a", w: "1" },
    { show: true, inner: true, v: "a", w: "2" },
    { show: true, inner: false, v: "a", w: "3" },
    { show: true, inner: true, v: "a", w: "4" },
    { show: false, inner: true, v: "b", w: "5" },
    { show: true, inner: true, v: "b", w: "6" },
  ],
};
