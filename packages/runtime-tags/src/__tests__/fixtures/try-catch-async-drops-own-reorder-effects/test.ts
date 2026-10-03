import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// A placeholder swaps in inside the streaming body, which then catches: its
// effect goes with the body, the ones around the try stay.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
};
