import type { TestConfig } from "../../main.test";

// A <define> body renders the renderer its call site switches, with an attribute
// from the template: the body's group beside the template's still switches it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, n: 1, t: "a" },
    { x: 2, n: 1, t: "a" },
    { x: 2, n: 2, t: "b" },
    { x: 1, n: 2, t: "b" },
  ],
};
