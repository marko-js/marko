import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// Sibling tries whose inner placeholders stream in their outer reorders, one
// inner body settling first and the other last.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, flush, wait],
};
