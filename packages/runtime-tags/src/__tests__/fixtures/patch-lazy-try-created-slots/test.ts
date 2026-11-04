import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A patch creates a lazily loaded child's `<try>`: its `@placeholder` and
// `@catch` resolve by id once the child's module registers them; a patch
// resolving after the catch reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { show: false },
    { show: true, p: Promise.resolve("a") },
    navigate(() => ({ show: true, p: rejectAfter(new Error("boom")) })),
    { show: true, p: Promise.resolve("c") },
  ],
};
