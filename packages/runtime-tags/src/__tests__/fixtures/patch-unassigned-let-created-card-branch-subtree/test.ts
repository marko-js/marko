import type { TestConfig } from "../../main.test";

// A created card's branch an unassigned `<let>` selects renders static markup and a child
// with content: none of its subtree ships, and a later patch keeps the first value.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { on: false, n: 1, w: "a" },
    { on: true, n: 1, w: "b" },
    { on: true, n: 0, w: "c" },
  ],
};
