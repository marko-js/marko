import type { TestConfig } from "../../main.test";

// patch-child-effect-calls-chosen-fn-unchanged without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: "1", pick: true },
    { x: "2", pick: true },
    { x: "3", pick: true },
    { x: "4", pick: false },
  ],
};
