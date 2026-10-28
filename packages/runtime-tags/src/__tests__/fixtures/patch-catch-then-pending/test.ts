import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// A caught boundary followed by a flush whose await is still pending: that
// flush carries the body, so it reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { promise: Promise.resolve(), detail: "a" },
    { promise: Promise.reject(new Error("x")), detail: "b" },
    { promise: resolveAfter(2), detail: "c" },
  ],
};
