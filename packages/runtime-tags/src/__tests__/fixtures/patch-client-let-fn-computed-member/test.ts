import type { TestConfig } from "../../main.test";

// A computed member names the function in the object a `<let>` holds; the
// client calls it with patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
  ],
};
