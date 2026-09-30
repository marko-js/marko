import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";

// Three placeholders, each streaming in its parent's reorder, settling
// outermost first and middle last.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait],
};
