import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector<HTMLElement>(".s")!.click();

// A child renders the tab its caller flags: the patch creates the tab the
// flags switch to, though the child reads one input to pick it.
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
