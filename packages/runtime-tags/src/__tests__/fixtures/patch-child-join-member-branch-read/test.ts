import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A written join's member a branch client state creates also reads: its fill
// run refreshes that branch and leaves the join, which the patch writes, alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p" },
    click("button.n"),
    { a: "y", b: "q" },
    click("button.s"),
    click("button.s"),
    { a: "z", b: "r" },
  ],
};
