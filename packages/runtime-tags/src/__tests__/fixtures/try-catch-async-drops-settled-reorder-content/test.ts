import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// An await in a reorder settles after its marker streamed, then a rejection in
// what it rendered fires the `@catch` around it: none of that content streams.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait],
};
