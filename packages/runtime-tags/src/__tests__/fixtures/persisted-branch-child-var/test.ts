import type { TestConfig } from "../../main.test";

// A child with a tag var inside a branch: only the branch's own setup wires
// the var, which a construct never runs, so no shell ships (fail closed).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
