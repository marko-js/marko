import type { TestConfig } from "../../main.test";

// A created card keeps the tag its unassigned `<let>` named once a later patch pairs it.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { on: false, n: 0, w: "a", items: [] },
    { on: true, n: 1, w: "b", items: ["x", "y"] },
    { on: true, n: 0, w: "c", items: ["z"] },
  ],
};
