import type { TestConfig } from "../../main.test";

const o = (x: string, y: number) => ({
  $global: { o: { x, y }, serializedGlobals: ["o"] },
});

// Each patch re-ships `o` whole and none changes `o.x`, so the script reading
// it never runs again.
export const config: TestConfig = {
  patches: true,
  steps: [o("a", 1), o("a", 2), o("a", 2)],
};
