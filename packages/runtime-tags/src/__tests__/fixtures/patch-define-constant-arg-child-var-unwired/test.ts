import type { TestConfig } from "../../main.test";

// A child's tag variable in a `<define>` every call passes a constant: nothing
// changes it, so the page wires no `_var` for it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }],
};
