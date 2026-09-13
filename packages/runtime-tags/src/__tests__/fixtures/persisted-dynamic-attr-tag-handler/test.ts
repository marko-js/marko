import type { TestConfig } from "../../main.test";

// An attr tag with a handler a child renders dynamically: the call site
// feeds the group nothing the child reads client-side, so the page ships
// the scope for pairing but not the object (whose handler nothing registers).
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}],
};
