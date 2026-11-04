import type { TestConfig } from "../../main.test";
// A `<let>` nothing assigns keeps its first object: the root card's `o.fn()` stays
// as a client render leaves it, and a card the patch creates renders the new value.
export const config: TestConfig = {
  patches: true,
  // A fresh render of the later input renders the root card's call anew.
  skip_fresh_render: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
