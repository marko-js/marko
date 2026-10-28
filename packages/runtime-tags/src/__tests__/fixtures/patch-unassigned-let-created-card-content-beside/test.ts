import type { TestConfig } from "../../main.test";

// Content a child renders reads a created card's unassigned `<let>` beside a branch the
// `<let>` selects: the branch stays the server's.
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
