import type { TestConfig } from "../../main.test";

// A `<let>`'s data is stringified beside a call of its function with patched
// input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
  ],
};
