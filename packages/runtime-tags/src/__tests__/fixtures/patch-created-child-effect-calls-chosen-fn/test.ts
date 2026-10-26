import type { TestConfig } from "../../main.test";

// A child a patch creates runs its effect over the chosen function once, and again
// only when a patch changes the pick.
export const config: TestConfig = {
  patches: true,
  // The effects count their runs on the page, which a fresh render starts over.
  skip_fresh_render: true,
  steps: [
    { x: "1", pick: true, show: false },
    { x: "2", pick: true, show: true },
    { x: "3", pick: true, show: true },
    { x: "4", pick: false, show: true },
  ],
};
