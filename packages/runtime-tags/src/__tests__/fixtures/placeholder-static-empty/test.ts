import type { TestConfig } from "../../main.test";

// A confident empty placeholder (`${""}`, `${NaN}`) renders no text but once
// claimed a walk step, shifting every later step in the section by one.
export const config: TestConfig = {
  // The SSR pass stops at the first new-input step.
  equivalent: false,
  steps: [{ x: "a" }, { x: "b" }],
};
