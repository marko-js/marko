import type { TestConfig } from "../../main.test";

// An unassigned `<let>` passed to a child whose effect reads it: the child keeps the
// client's value as the input changes.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
  ],
};
