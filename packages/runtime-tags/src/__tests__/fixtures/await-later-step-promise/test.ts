import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// A later step's `navigate` function builds its promise as the step's render
// starts, so the client shows the placeholder until it settles.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { promise: Promise.resolve("a") },
    wait,
    navigate(() => ({ promise: resolveAfter("b") }), betweenFlushes),
    wait,
  ],
};

function betweenFlushes() {}
