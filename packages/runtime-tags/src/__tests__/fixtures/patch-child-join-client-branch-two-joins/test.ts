import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A member of two written joins, one in a branch client state opens: its
// unpatched key re-runs that join alone, as the patch writes the other.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p", c: "u" },
    click("button.n"),
    { a: "y", b: "q", c: "v" },
    click("button.s"),
    click("button.s"),
    { a: "z", b: "r", c: "w" },
  ],
};
