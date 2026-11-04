import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A caught boundary followed by a flush whose await is still pending: that
// flush carries the body, so it reloads. The promise starts with its step.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { promise: Promise.resolve(), detail: "a" },
    { promise: Promise.reject(new Error("x")), detail: "b" },
    navigate(pending),
  ],
};

function pending() {
  return { promise: resolveAfter(2), detail: "c" };
}
