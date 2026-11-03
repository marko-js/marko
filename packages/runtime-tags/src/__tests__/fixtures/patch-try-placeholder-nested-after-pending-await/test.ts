import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A nested placeholder try after a pending await in its parent's body: the flush
// ships both placeholders' shells.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { a: Promise.resolve(1), b: Promise.resolve(2) },
    navigate(pending, betweenFlushes),
  ],
};

function pending() {
  return { a: resolveAfter(3, 2), b: resolveAfter(4, 1) };
}

function betweenFlushes() {}
