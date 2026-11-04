import type { TestConfig } from "../../main.test";

const page = (x: string, m: number) => ({
  m,
  $global: { x, serializedGlobals: ["x"] },
});

// patch-global-loop-key-caller without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [page("a", 2), page("b", 3)],
};
