import type { TestConfig } from "../../main.test";

// A `<let>` nothing assigns joined with server input in a loop's rows: a patch
// runs the join through their closure with the `<let>`'s value.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value.
  skip_fresh_render: true,
  steps: [
    { a: "a1", b: "b1", items: [1, 2] },
    { a: "a2", b: "b2", items: [1, 2] },
  ],
};
