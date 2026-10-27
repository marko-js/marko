import type { TestConfig } from "../../main.test";
// patch-effect-calls-chosen-fn without patches: the script runs once per change
// of the chosen function.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a", upper: false },
    { title: "a", upper: true },
    { title: "b", upper: true },
    { title: "b", upper: true },
  ],
};
