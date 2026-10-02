import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The set of `Item` instances streams first; one the caught body renders joins
// it through a call still unsent when the body throws, so nothing is written.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush],
};
