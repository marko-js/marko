import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// Round-trip: `count` flows Tags -> Class (the split child renders it) and the
// split child's event flows Class -> Tags (incrementing the same <let>), which
// re-renders both the tags display and the split child's reactive input.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#class-api"), click("#class-api")],
};
