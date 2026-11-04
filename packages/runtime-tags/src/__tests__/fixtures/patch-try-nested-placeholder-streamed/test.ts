import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// Between flushes, a pending await shows only the inner try's placeholder, so
// the response ships only that one's shell.
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
