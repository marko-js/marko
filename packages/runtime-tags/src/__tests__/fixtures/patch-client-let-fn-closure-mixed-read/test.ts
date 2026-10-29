import type { TestConfig } from "../../main.test";

// A closure over a `<let>`'s function is called with patched input and, in an
// `<if>`, with a constant.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", more: false },
    { label: "b", more: true },
  ],
};
