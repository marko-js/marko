import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";

// The inner placeholder streams in the outer body's reorder, ahead of its first
// await: both placeholders still swap once their bodies arrive.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait],
};
