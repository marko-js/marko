import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The inner `@catch` fires while in-order content holds the outer body back, so
// its markers stream later in the outer reorder: both still swap in.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
