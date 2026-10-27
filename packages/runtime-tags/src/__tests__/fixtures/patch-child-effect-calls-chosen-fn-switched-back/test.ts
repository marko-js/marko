import type { TestConfig } from "../../main.test";

// A pick switched back binds the function the page already had, as plain keeps it:
// the child's effect sees `fa` from load again at step 3.
export const config: TestConfig = {
  patches: true,
  // The effects count their runs on the page, which a fresh render starts over.
  skip_fresh_render: true,
  steps: [
    { x: "1", pick: true },
    { x: "2", pick: false },
    { x: "3", pick: true },
    { x: "4", pick: true },
  ],
};
