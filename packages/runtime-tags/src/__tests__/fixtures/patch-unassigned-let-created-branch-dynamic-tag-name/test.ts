import type { TestConfig } from "../../main.test";

// An unassigned `<let>` read through a dynamic tag's name in a branch a patch creates:
// it shows the client's value, not the server's later input.
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
