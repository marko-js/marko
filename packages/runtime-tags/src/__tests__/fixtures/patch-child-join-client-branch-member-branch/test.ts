import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A written join's member another client branch also reads: one entry carries it,
// where client state created the join's branch or the other one.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p", show: true },
    click("button.n"),
    { a: "y", b: "q", show: true },
    click("button.o"),
    click("button.o"),
    { a: "z", b: "r", show: true },
    click("button.s"),
    click("button.s"),
    { a: "w", b: "t", show: true },
  ],
};
