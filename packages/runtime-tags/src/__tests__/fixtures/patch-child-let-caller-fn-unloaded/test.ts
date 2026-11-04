import type { TestConfig } from "../../main.test";

// As patch-child-let-caller-fn, but the caller has no client code: the page
// still loads the function the child's `<let>` holds, as a patch may change
// what joins it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }],
};
