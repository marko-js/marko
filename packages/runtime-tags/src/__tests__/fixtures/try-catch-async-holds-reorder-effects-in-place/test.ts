import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The placeholder's content swaps in while the second body streams; its effect
// waits at its place in the stream, ahead of that body's own.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
};
