import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// Regression: a Tags API parent re-rendering an inert (no component file)
// Class API child must not crash. The reactive `value` input makes the parent
// re-render the child when the button updates `msg`. CSR mounts the child while
// SSR resumes and morphs it, so their mutation logs differ (equivalent: false).
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#tags"), click("#tags")],
};
