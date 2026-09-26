import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// An await started by `@catch` content counts before the rejected value
// completes, so the outer `@placeholder` stays up until it settles.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
