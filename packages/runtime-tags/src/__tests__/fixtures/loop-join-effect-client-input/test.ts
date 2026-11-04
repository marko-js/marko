import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLElement>("button.n")!.click();
// patch-loop-join-effect-client-input without patches: the client runs each
// row's script once per change of what it reads.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: "a", items: ["p"] },
    { x: "c", items: ["r", "q", "s"] },
    click,
    { x: "e", items: ["u", "q", "s", "t"] },
  ],
};
