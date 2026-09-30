import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";

// A nested `@placeholder` ahead of the body's first `<await>` throws as the
// outer reorder streams it: the outer `@catch` takes the whole try's place.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
