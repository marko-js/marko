import type { TestConfig } from "../../main.test";

// A `<const>` derived from a `<let>` nothing assigns, joined with server input:
// a patch runs the join with the value the client derived.
export const config: TestConfig = {
  patches: true,
  // The `<let>` keeps its first value.
  skip_fresh_render: true,
  steps: [
    { a: "a1", b: "b1" },
    { a: "a2", b: "b2" },
  ],
};
