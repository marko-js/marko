import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A placeholder try after a pending await: the flush carries the try's pending
// entry, so it ships the placeholder's shell too.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { a: Promise.resolve(1), b: Promise.resolve(2) },
    navigate(pending, betweenFlushes),
  ],
};

function pending() {
  return { a: resolveAfter(3, 3), b: resolveAfter(4, 1) };
}

function betweenFlushes() {}
