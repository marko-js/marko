import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// Lazy effects held for an in-order await in lazy content, including those
// written before it in the same content, run in stream order once it completes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
