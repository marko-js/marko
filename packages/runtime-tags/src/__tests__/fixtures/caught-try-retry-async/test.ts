import type { TestConfig } from "../../main.test";

// The plain twin of `patch-caught-try-retry-async`: the document main renders.
export const config: TestConfig = {
  // A client render shows the `@catch` once the rejection settles; the
  // document streams it.
  equivalent: false,
  steps: () => [{ show: true, value: Promise.reject(new Error("down")) }],
};
