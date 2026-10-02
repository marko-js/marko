import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The set of `Item` instances streams with the first one; one the caught body
// renders later joins it through a call, which its `@catch` must undo.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
