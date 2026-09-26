import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// An await started by resolved content counts before the outer value
// completes, so `@placeholder` stays up until both have settled.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
