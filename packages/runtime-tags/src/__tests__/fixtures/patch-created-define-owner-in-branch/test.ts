import type { TestConfig } from "../../main.test";

// An in-place `<define>` body in a branch a patch creates renders an `<if>`
// client state selects, reading the page's input through the body's owner.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1, w: "a" },
    { on: true, n: 1, w: "b" },
    { on: true, n: 1, w: "c" },
  ],
};
