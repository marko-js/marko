import type { TestConfig } from "../../main.test";

// An `<await>` a page-root unassigned `<let>` gives its promise: no patch settles it
// again, and its body's holes take later input.
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
