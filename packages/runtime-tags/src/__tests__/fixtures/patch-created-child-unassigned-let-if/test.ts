import type { TestConfig } from "../../main.test";

// A created child's `<if>` over a `<let>` nothing assigns: the patch renders
// the branch, so the child keeps no client code for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 0 },
    { on: true, n: 1 },
    { on: false, n: 1 },
    { on: true, n: 2 },
  ],
};
