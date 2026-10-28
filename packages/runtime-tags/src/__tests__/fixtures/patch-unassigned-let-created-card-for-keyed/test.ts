import type { TestConfig } from "../../main.test";

// A created card keeps the keyed rows its unassigned `<let>` gave, their items included,
// once a later patch pairs it.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { on: false, items: [1], w: "a" },
    { on: true, items: [1, 2], w: "b" },
    { on: true, items: [1, 2, 3], w: "c" },
  ],
};
