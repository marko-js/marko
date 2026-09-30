import type { TestConfig } from "../../main.test";
import { type } from "../../utils/steps";

// `value:=state[key]` binds the change handler to `state[key + "Change"]`
// (here `state.vChange`), so typing updates `v`, not `wrong`. The change
// handler is selected dynamically, so every method the expression can reach
// is registered and the reactive graph serializes for resume.
export const config: TestConfig = {
  steps: [{}, type("input", "z")],
};
