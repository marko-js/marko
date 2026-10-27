import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// A `<define>` body's written join, where one call passes state: client code
// renders it always, so its members ship under their unpatched keys.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p", show: true },
    click("button.n"),
    { a: "y", b: "q", show: true },
    click("button.t"),
    click("button.t"),
    { a: "z", b: "r", show: true },
  ],
};
