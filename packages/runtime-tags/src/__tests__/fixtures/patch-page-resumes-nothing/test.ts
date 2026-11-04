import type { TestConfig } from "../../main.test";

// A page with no client code and nothing to resume still names its build, so
// a patch of it applies, changing nothing.
export const config: TestConfig = {
  patches: true,
  steps: [{ page: 1 }, { page: 2 }],
};
