import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A caught try whose own content settled is sent at the write, so the inner
// try's placeholder shows between flushes.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("a") },
    navigate(pending, betweenFlushes),
  ],
};

function pending() {
  return { promise: resolveAfter("b", 3) };
}

function betweenFlushes() {}
