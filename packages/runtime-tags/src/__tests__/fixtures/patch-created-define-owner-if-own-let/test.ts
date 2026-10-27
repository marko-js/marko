import type { TestConfig } from "../../main.test";

// A created card's in-place `<define>` body's `<if>` reads the card's `<let>`
// that selects it, through the body's owner.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1, w: "a" },
    { on: true, n: 1, w: "b" },
    { on: true, n: 1, w: "c" },
  ],
};
