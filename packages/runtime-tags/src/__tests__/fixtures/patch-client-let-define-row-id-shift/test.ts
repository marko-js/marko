import type { TestConfig } from "../../main.test";

// A `<let>` holds a row's `<define>` body while rows insert before it: the
// body's holes take the patched input in the row the client has.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", more: false, n: 1, items: ["x"] },
    { label: "b", more: true, n: 2, items: ["z", "x"] },
    { label: "c", more: false, n: 3, items: ["x"] },
  ],
};
