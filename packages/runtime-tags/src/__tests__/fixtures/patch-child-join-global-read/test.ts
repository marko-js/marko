import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLElement>("button.n")!.click();
// A written join of two inputs also reads `$global`: a patch changing only the
// global re-runs it on each instance whose group mixes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "a", y: "b", $global: { g: "!", serializedGlobals: ["g"] } },
    { x: "a", y: "b", $global: { g: "?", serializedGlobals: ["g"] } },
    click,
    { x: "a", y: "b", $global: { g: "#", serializedGlobals: ["g"] } },
  ],
};
