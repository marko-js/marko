import type { TestConfig } from "../../main.test";

// A `<let>`'s function passed to `map` over patched input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", more: false, n: 1, items: ["x"] },
    { label: "b", more: true, n: 2, items: ["z", "x"] },
    { label: "c", more: false, n: 3, items: ["x"] },
  ],
};
