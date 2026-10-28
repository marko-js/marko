import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-local-fn where a nested branch's `<let>` calls the
// function: its scope is another's, so the function's own scope seeds it.
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
