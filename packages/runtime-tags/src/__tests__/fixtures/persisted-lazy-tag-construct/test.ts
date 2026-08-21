import type { TestConfig } from "../../main.test";

// A patch REVEALS the branch holding a not-yet-loaded lazy child. The branch
// has no shell (a lazy child's markup never composes into a parent record),
// so the construct rejects and the caller navigates — the fail-closed
// behavior until lazy construct delivery lands.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  expect_rejection: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
  ],
};
