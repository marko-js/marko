import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// A later step's promise, built with the step list, starts with its step: its
// patch shows the placeholder between flushes.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("a") },
    wait,
    navigate(() => ({ promise: resolveAfter("b") }), betweenFlushes),
    wait,
  ],
};

function betweenFlushes() {}
