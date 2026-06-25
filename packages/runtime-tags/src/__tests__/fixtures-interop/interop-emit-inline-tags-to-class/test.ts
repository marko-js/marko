import type { TestConfig } from "../../main.test";

// Inline counterpart of interop-emit-split: a Class API child emits an event
// and the Tags API parent's handler clears a <let> (no class-side re-render).
function clickClass(c: Element) {
  (c.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickClass],
};
