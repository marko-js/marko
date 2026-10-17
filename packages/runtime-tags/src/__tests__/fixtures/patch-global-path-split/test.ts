import type { TestConfig } from "../../main.test";

const o = (x: string, y: number) => ({
  $global: { o: { x, y }, serializedGlobals: ["o"] },
});

// A read of `o` re-runs on every patch, alone or beside a read of `o.x` in its
// own expression, while a read of `o.x` alone does not.
export const config: TestConfig = {
  patches: true,
  steps: [o("a", 1), o("a", 2)],
};
