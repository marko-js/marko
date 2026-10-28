import type { TestConfig } from "../../main.test";

// Rows an unassigned `<let>` gives: a later patch keeps the client's rows and fills their
// holes.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { items: [1], w: "a" },
    { items: [1, 2], w: "b" },
  ],
};
