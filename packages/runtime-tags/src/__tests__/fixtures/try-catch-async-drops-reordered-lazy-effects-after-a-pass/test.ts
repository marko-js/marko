import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A reorder in lazy content's caught body holds its effects past a pass that
// streams more of the body; its `@catch` still drops them.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait],
};
