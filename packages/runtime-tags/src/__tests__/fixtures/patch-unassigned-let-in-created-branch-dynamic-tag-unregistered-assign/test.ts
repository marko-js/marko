import type { TestConfig } from "../../main.test";

// A branch a patch creates holds an unassigned `<let>` (assigned only by a handler
// nothing registers) that names a dynamic tag.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
  ],
};
