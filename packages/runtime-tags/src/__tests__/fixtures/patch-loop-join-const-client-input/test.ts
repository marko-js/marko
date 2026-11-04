import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLElement>("button.n")!.click();
// As patch-loop-join-effect-client-input, the join read through a `<const>`: a
// created row takes the item as a slot write, so none renders `undefined`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "a", items: ["p"] },
    { x: "c", items: ["r", "q", "s"] },
    click,
    { x: "e", items: ["u", "q", "s", "t"] },
  ],
};
