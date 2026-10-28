import type { TestConfig } from "../../main.test";

// A branch a patch creates holds an unassigned `<let>` passed to a child.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "c" },
  ],
};
