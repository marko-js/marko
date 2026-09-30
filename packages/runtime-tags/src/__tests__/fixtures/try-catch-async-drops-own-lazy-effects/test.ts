import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The lazy child streamed with the body, so its held effect goes with the
// body when the `@catch` takes its place.
export const config: TestConfig = {
  steps: [{}, flush, wait],
  equivalent: false,
};
