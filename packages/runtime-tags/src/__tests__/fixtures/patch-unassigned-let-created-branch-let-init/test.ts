import type { TestConfig } from "../../main.test";

// A branch a patch creates inits its `<let>` from a page's unassigned `<let>`: it
// takes the client's value, not the server's later input.
export const config: TestConfig = {
  patches: true,
  // The page's `<let>` keeps its first value, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "c" },
  ],
};
