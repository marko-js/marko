import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A `<define>` body's written join, in a branch real client state created, over
// a member a script also reads: its subscribers re-run the join from one entry.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p", show: true },
    click("button.s"),
    click("button.s"),
    { a: "y", b: "q", show: true },
    click("button.n"),
    { a: "z", b: "r", show: true },
  ],
};
