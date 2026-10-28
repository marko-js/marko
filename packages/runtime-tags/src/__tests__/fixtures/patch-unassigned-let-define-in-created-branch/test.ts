import type { TestConfig } from "../../main.test";

// An unassigned `<let>` in a branch a patch creates, read by a `<define>` body called
// there: the branch, created with the `<let>`, takes the server's first value.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
  ],
};
