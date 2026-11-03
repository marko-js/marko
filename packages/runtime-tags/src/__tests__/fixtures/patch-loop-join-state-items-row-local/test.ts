import type { TestConfig } from "../../main.test";
const click = (sel: string) => (d: Document) =>
  d.querySelector<HTMLElement>(sel)!.click();
// Rows client state renders join a client input with a local of a server
// input: the local ships no unpatched key, so a paired row inits the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { b: "m" },
    click("button.l"),
    { b: "n" },
    click("button.n"),
    { b: "o" },
  ],
};
