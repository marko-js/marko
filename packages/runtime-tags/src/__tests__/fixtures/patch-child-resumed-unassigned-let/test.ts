import type { TestConfig } from "../../main.test";

// A resumed child's never-assigned `<let>` keeps its first value after a
// patch, as a client render does.
export const config: TestConfig = {
  patches: true,
  // A never-assigned `<let>` keeps its first value, which a fresh render of a
  // later input lacks.
  skip_fresh_render: true,
  steps: [
    { show: true, list: ["b", "c"] },
    { show: true, list: ["d"] },
  ],
};
