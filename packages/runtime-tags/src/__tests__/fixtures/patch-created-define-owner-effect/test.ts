import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// A created card's in-place `<define>` body's effect reads the card's state
// and input through the body's owner.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1, w: "a" },
    { on: true, n: 1, w: "b" },
    { on: true, n: 1, w: "c" },
    click,
  ],
};
