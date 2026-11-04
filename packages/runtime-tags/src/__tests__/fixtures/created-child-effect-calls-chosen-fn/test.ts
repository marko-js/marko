import type { TestConfig } from "../../main.test";

// patch-created-child-effect-calls-chosen-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: "1", pick: true, show: false },
    { x: "2", pick: true, show: true },
    { x: "3", pick: true, show: true },
    { x: "4", pick: false, show: true },
  ],
};
