import type { TestConfig } from "../../main.test";
// The chosen function passed on through a middle template: the grandchild's
// script re-runs by the choice and by what the function captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    { title: "a", upper: true },
    { title: "b", upper: true },
    { title: "b", upper: true },
  ],
};
