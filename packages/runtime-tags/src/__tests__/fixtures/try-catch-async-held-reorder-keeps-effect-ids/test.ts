import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The placeholder's content swaps in while the second body streams; the body's
// effect still runs its own script, not the swapped-in content's.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
};
