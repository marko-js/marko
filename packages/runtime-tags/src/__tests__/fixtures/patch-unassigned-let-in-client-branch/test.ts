import type { TestConfig } from "../../main.test";

// A branch an unassigned `<let>` selects inside one the client renders: the client
// renders both, and a patch only fills their holes.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
    { v: "c", w: "3" },
  ],
};
