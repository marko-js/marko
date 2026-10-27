import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A written join's member another join with a client input also reads, in a
// branch real client state created: its one entry re-runs both joins.
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
