import type { TestConfig } from "../../main.test";

// A branch holding a recursive tag: each level's loop body ships its own
// shell, so composition stops at the branch and the tree constructs.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false },
    { show: true, tree: { name: "a", children: [{ name: "b" }] } },
    { show: true, tree: { name: "a", children: [{ name: "c" }] } },
  ],
};
