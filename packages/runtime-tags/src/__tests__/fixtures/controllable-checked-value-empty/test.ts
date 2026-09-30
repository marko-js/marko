import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// `null`/`undefined`/`""` are treated as the same empty value, so a `value=""`
// checkbox bound to a void value renders as checked and resumes with that state
// (and stays checked since `undefined` still matches `""` after unchecking).
// The `value=""` attribute must be present and consistent between SSR and CSR.
// This is a degenerate case (`value=""` on a checkbox is an anti-pattern); the
// point of the fixture is SSR/CSR consistency of the collapsed empty handling.
export const config: TestConfig = {
  steps: [{}, click("input"), click("input")],
};
