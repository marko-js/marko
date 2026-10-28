import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector<HTMLElement>(".s")!.click();

// A child passes the flagged tab on to a view that renders it: the patch
// creates the tab the flags switch to.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    click,
    { x: 1, y: "z" },
    click,
    { x: 2, y: "z" },
  ],
};
