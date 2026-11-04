import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLElement>("button.n")!.click();
// A written join in a branch its other member opens: the member's unpatched key
// ships wherever its fill would, so the fill sends nothing more.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "a", y: "p" },
    click,
    { x: "b", y: "q" },
    { x: "c", y: "" },
    click,
    { x: "d", y: "r" },
  ],
};
