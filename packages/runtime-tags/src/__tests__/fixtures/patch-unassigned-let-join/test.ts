import type { TestConfig } from "../../main.test";

// A patch runs the join of a `<let>` nothing assigns with the server's input;
// the `<let>` keeps its value.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { a: "x", b: "1" },
    { a: "y", b: "2" },
  ],
};
