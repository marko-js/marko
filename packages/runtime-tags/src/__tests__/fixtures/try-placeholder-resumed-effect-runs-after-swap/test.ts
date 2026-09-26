import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A server effect sent before its streaming `<try>`'s content completes runs
// once that content swaps in.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait, flush, wait],
};
