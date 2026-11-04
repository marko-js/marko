import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A member reaches a written join through a direct alias, in a branch client
// state opens: the alias's structure ships the input under its unpatched key.
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
