import type { TestConfig } from "../../main.test";

const o = (x: string, y: number) => ({
  $global: { o: { x, y }, serializedGlobals: ["o"] },
});

// A loop's rows reading a nested member in stateful structure re-run only
// when that member changes, not when its key does.
export const config: TestConfig = {
  patches: true,
  steps: [o("a", 1), o("a", 2), o("b", 2)],
};
