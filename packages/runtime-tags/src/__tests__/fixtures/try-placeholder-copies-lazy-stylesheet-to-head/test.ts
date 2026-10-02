import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// After the first flush, the placeholder's lazy tag streams its stylesheet inside
// the range the body replaces; a copy of it in the head stays once the body swaps in.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait],
};
