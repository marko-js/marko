import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// Lazy content heading the stream resolves and waits again in the same chunk; the
// effects it held run before those it rendered since, in stream order.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait],
};
