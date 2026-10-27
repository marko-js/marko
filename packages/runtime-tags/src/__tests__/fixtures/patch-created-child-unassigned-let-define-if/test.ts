import type { TestConfig } from "../../main.test";

// A created child's `<define>` body branches on what its every call passes, a
// `<let>` nothing assigns: the patch renders the branch, as for an `<if>` of it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 0 },
    { on: true, n: 1 },
    { on: false, n: 1 },
    { on: true, n: 0 },
    { on: false, n: 0 },
    { on: true, n: 2 },
  ],
};
