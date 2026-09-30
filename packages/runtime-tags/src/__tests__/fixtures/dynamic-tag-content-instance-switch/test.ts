import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// Both providers return the same content section, so the dynamic tag sees one
// renderer id for two instances; only the owner distinguishes them.
export const config: TestConfig = {
  steps: [{}, click("#toggle"), click(".bump", 1), click("#toggle")],
};
