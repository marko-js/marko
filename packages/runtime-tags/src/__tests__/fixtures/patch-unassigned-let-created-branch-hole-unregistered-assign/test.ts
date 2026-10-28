import type { TestConfig } from "../../main.test";

// A branch a patch creates reads a page's unassigned `<let>` (assigned only by a
// handler nothing registers): it shows the client's value, not the server's later input.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "c" },
  ],
};
