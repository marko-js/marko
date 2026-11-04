import type { TestConfig } from "../../main.test";

// A created card's `<define>` body called inside a branch reads the card's
// input through its owner, two scopes up.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1, w: "a" },
    { on: true, n: 1, w: "b" },
    { on: true, n: 1, w: "c" },
  ],
};
