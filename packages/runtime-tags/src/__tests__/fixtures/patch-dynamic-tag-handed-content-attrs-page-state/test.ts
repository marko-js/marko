import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector<HTMLElement>(".s")!.click();

// The handed content beside client state elsewhere on the page: a patch pairs
// it rather than naming a renderer the bundle drops.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    click,
    { x: 1, y: "z" },
    click,
    { x: 2, y: "z" },
  ],
};
