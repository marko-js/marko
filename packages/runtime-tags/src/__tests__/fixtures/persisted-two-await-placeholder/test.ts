import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// Two awaits pending under one placeholder show it once and dismiss it
// once both settle.
export const config: TestConfig = {
  persisted: true,
  skip_fresh_render: true,
  steps: () => [
    { a: Promise.resolve("a1"), b: Promise.resolve("b1") },
    { a: resolveAfter("a2", 1), b: resolveAfter("b2", 2) },
    wait,
    flush,
  ],
};
