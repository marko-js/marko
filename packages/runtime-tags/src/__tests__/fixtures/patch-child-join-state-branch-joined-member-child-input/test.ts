import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// As patch-child-join-state-branch-joined-member, its second join read through a
// child's input, which keeps that join one no patch writes.
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
