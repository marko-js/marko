import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// The ebay-button shape: a split Class API child emits `click`; the Tags API
// parent's onClick clears a <let>. The tags-side value must reactively clear.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#class-api")],
};
