import type { TestConfig } from "../../main.test";

// patch-child-effect-reads-loop-item-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ items: ["a", "b"] }, { items: ["c", "d"] }, { items: ["e", "f"] }],
};
