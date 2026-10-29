import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();

// A child's input joined with caller state under structure the caller's state
// picks (an unpatched join key the closures keep), rendered in a branch the
// child's state picks, and read by an effect in a branch the input picks: a
// patch filling it re-runs the effect.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", on: true },
    click("button.s"),
    click("button.s"),
    { a: "y", on: true },
    { a: "z", on: true },
  ],
};
