import type { TestConfig } from "../../main.test";

// A `<let>` holds a function and data the init changes: the client keeps both
// and renders the call with patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", more: false, n: 1, items: ["x"] },
    { label: "b", more: true, n: 2, items: ["z", "x"] },
    { label: "c", more: false, n: 3, items: ["x"] },
  ],
};
