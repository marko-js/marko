import type { TestConfig } from "../../main.test";

const page = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });

// patch-global-loop-key without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [page("a"), page("b")],
};
