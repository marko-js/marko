import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The placeholder's content swaps in while the second body streams; its effect
// waits with that body's, and they run in the order they arrived, as on the client.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
};
