import type { TestConfig } from "../../main.test";
// patch-child-effect-calls-chosen-fn without patches: the script runs once per
// change of the choice or of what the chosen function reads.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a" },
    { title: "a", upper: true },
    { title: "b", upper: true },
    { title: "b", upper: true },
  ],
};
