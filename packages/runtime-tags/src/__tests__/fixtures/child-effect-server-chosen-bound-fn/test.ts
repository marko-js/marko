import type { TestConfig } from "../../main.test";

// patch-child-effect-server-chosen-bound-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: "1", pick: true },
    { x: "2", pick: false },
    { x: "3", pick: false },
  ],
};
