import type { TestConfig } from "../../main.test";

// A child's `<let>` holds a function its caller passes, and calls it with
// patched input: the caller's own client code loads its module, which registers
// the function, so the patch runs the join.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps the function it was created with.
  skip_fresh_render: true,
  steps: [{ label: "a" }, { label: "b" }],
};
