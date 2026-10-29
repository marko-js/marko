import type { TestConfig } from "../../main.test";

// A `<let>` holding content beside data: the client keeps both as the init
// changes, and the content's holes take each patch's input.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { n: 1, more: false },
    { n: 1, more: true },
    { n: 1, more: false },
    { n: 2, more: true },
  ],
};
