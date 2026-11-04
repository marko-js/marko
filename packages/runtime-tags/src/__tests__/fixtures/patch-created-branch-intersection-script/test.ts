import type { TestConfig } from "../../main.test";

// A branch local derived from an intersection of two inputs, read by a script beside a third:
// a patch writes the local, and the script re-runs once either changed, live or created.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, prefix: "a", x: 1, suffix: "s" },
    { show: true, prefix: "b", x: 1, suffix: "s" },
    { show: true, prefix: "b", x: 12, suffix: "s" },
    { show: true, prefix: "b1", x: 2, suffix: "s" },
    { show: true, prefix: "b1", x: 2, suffix: "t" },
    { show: false, prefix: "c", x: 3, suffix: "u" },
    { show: true, prefix: "c", x: 3, suffix: "u" },
    { show: true, prefix: "d", x: 3, suffix: "u" },
  ],
};
