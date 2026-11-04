import type { TestConfig } from "../../main.test";

// A dynamic tag in a `@catch` reading its error, reading none of it itself:
// the catch a patch creates renders it, its tag variable included.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { fail: false, label: "a", big: true },
    { fail: true, label: "b", big: true },
    { fail: true, label: "c", big: false },
    { fail: true, label: "d", big: false },
  ],
};
