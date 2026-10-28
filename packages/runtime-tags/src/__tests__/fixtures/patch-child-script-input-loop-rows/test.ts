import type { TestConfig } from "../../main.test";

const click = (selector: string) => (d: Document) =>
  d.querySelector<HTMLButtonElement>(selector)!.click();

// A child input its script reads keeps a fill registration of its own; a patch
// changing it still re-renders the loop rows client state added.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "m" },
    click("button.l"),
    { a: "x", b: "n" },
    { a: "y", b: "n" },
  ],
};
