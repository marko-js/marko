import type { TestConfig } from "../../main.test";

// A `<let>` a patch creates keeps the template it was seeded with: a later
// patch switching the init leaves it, as a client render does.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { show: false, big: false, label: "initial" },
    { show: true, big: false, label: "a" },
    { show: true, big: false, label: "b" },
    { show: true, big: true, label: "c" },
  ],
};
