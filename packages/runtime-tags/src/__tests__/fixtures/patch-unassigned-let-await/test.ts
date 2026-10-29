import type { TestConfig } from "../../main.test";

// An `<await>` a page-root unassigned `<let>` gives its promise: no patch creates its
// body, whose `input.w` text updates by its own registered fill.
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
