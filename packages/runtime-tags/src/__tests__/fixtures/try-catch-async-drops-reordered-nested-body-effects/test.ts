import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A placeholder's content swaps in while an in-order await still holds the
// effects; a `<try>` in that content then catches, and drops its body's effect
// while the content around it keeps its own.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait],
};
