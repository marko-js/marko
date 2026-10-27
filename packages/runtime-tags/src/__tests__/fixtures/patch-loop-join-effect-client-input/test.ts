import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLElement>("button.n")!.click();
// A row's item joins an input one caller passes client state, read by a hole
// and an effect: where that input is the client's, the scope inits the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "a", items: ["p"] },
    { x: "c", items: ["r", "q", "s"] },
    click,
    { x: "e", items: ["u", "q", "s", "t"] },
  ],
};
