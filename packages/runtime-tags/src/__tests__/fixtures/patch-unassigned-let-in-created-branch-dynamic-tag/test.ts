import type { TestConfig } from "../../main.test";

// A branch a patch creates holds an unassigned `<let>` that names a dynamic tag.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
  ],
};
