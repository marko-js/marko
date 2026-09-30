import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// Inline counterpart of interop-emit-split: a Class API child emits an event
// and the Tags API parent's handler clears a <let> (no class-side re-render).
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#class-api")],
};
