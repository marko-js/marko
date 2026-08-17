import type { TestConfig } from "../../main.test";

// A pure-server page whose only signals are tag vars: nothing resumes,
// so a patch with no changed holes applies as a no-op.
export const config: TestConfig = {
  persisted: true,
  steps: [{ n: 1 }, { n: 2 }],
};
