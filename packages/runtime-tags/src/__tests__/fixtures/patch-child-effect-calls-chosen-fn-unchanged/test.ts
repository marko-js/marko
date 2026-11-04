import type { TestConfig } from "../../main.test";

// A server-chosen function a child's effect calls: a patch that leaves it unchanged
// re-runs no effect, the first patch after resume included.
export const config: TestConfig = {
  patches: true,
  // The effects count their runs on the page, which a fresh render starts over.
  skip_fresh_render: true,
  steps: [
    { x: "1", pick: true },
    { x: "2", pick: true },
    { x: "3", pick: true },
    { x: "4", pick: false },
  ],
};
