import type { TestConfig } from "../../main.test";

// A pure-server page whose only signals are tag vars: the var resume
// references a registry the shaken client bundle never loads, so the
// first patch fails closed to navigation (agent-feedback: retention).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [{ n: 1 }, { n: 2 }],
};
