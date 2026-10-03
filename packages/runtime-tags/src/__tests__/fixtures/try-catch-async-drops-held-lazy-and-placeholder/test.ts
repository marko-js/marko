import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The body's lazy effects and its stateful placeholder's effects wait for the
// in-order await after them; its `@catch` drops both but keeps the page's own.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
