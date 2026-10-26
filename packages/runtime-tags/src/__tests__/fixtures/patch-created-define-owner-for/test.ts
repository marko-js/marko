import type { TestConfig } from "../../main.test";

// A created card's in-place `<define>` body loops over client state, reading
// the card's input through the body's owner.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1, w: "a" },
    { on: true, n: 1, w: "b" },
    { on: true, n: 1, w: "c" },
  ],
};
