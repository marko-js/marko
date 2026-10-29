import type { TestConfig } from "../../main.test";

// A `<let>` holding content beside data, in a child a patch creates: the patch
// seeds the `<let>`, which then keeps its value as the init changes, as a
// client render does.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { show: false, n: 1, more: true },
    { show: true, n: 2, more: true },
    { show: true, n: 3, more: false },
    { show: true, n: 4, more: true },
  ],
};
