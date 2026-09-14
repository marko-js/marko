import type { TestConfig } from "../../main.test";

// An unwritten `<let>` folds to a constant: no fill registration retains
// userland code hydration tree-shakes, the hole captures as a plain fill,
// and the branch still constructs from its shell.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
  ],
};
