import type { TestConfig } from "../../main.test";

const g = (x: string, k: string) => ({
  $global: { o: { x }, k, serializedGlobals: ["o", "k"] },
});

// A child's nested read registers before its parent's key read, and still
// re-runs when its path changes.
export const config: TestConfig = {
  patches: true,
  steps: [g("a", "k"), g("b", "k")],
};
