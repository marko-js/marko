import type { TestConfig } from "../../main.test";

// An unassigned `<let>` selects a branch while its input changes, on a page with no
// client code.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { show: true, w: "1" },
    { show: false, w: "2" },
  ],
};
