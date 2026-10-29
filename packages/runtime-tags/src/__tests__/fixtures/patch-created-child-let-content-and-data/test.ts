import type { TestConfig } from "../../main.test";

// A `<let>` holding content beside data, in a child a patch creates: its data
// arrives with the created scope, then keeps its value, as a client render does
// (a fresh render of the changed input is no reference for that).
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
