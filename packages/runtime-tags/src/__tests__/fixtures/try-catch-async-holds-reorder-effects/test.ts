import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The placeholder's content swaps in while the second body streams; its effect
// waits with that body's, and both run once that body completes.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
};
