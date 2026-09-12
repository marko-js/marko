import type { TestConfig } from "../../main.test";

// A style with a dynamic rule renders a live style element: the walk must
// step past it before claiming the sibling elements.
export const config: TestConfig = {
  steps: [{ pct: 1, c: "a", d: "b" }],
};
