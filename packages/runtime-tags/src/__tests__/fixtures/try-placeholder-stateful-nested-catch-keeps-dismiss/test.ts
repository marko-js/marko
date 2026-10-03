import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The body's first pending part is in a nested try whose catch fires while
// later content holds effects: the placeholder is still destroyed on swap.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, flush],
};
