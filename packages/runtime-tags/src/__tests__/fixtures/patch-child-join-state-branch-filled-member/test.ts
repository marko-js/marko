import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A written join's member a script also reads, in a branch real client state
// created: one entry carries it, re-running the join and refreshing the script.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x" },
    click("button.s"),
    click("button.s"),
    { a: "y" },
    { a: "z" },
  ],
};
