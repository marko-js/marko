import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLElement>("button.n")!.click();
// A written join reads one input through a destructured alias, which a branch
// also reads directly: whichever is asked first, the scope inits the join.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: "a", y: "b" }, { x: "c", y: "d" }, click, { x: "e", y: "f" }],
};
