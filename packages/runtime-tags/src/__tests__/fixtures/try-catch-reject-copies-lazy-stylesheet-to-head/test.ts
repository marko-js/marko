import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The lazy tag streams its stylesheet inside the body's range, which the `@catch`
// then removes; a copy of it in the head stays.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait],
};
