import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// Lazy content heading the stream resolves and waits again in the same chunk; the
// effects it held still run, with those it rendered since, once it completes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait],
};
