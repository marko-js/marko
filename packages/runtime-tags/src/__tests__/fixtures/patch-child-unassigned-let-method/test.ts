import type { TestConfig } from "../../main.test";

// A child a patch creates renders its never-assigned `<let>` through a method
// and a member: the reads are holes the creating flush writes.
export const config: TestConfig = {
  patches: true,
  // A never-assigned `<let>` keeps its first value, which a fresh render of a
  // later input lacks.
  skip_fresh_render: true,
  steps: [
    { show: false, list: ["a"] },
    { show: true, list: ["b", "c"] },
    { show: true, list: ["d"] },
  ],
};
