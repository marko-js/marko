import type { TestConfig } from "../../main.test";

// A `<let>` nothing assigns joined with server input inside a branch the server
// renders: a patch runs the join through its closure with the `<let>`'s value.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value.
  skip_fresh_render: true,
  steps: [
    { a: "a1", b: "b1", show: true },
    { a: "a2", b: "b2", show: true },
  ],
};
