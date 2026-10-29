import type { TestConfig } from "../../main.test";

// A `<let>` holds a function beside array data: the client keeps both and
// renders the call with patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", n: [1, 2] },
    { label: "b", n: [1, 2] },
  ],
};
