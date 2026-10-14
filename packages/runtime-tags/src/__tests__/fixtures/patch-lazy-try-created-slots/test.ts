import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A patch creates a lazily loaded child's `<try>`: its `@placeholder` and
// `@catch` resolve by id once the child's module registers them.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { show: false },
    { show: true, p: Promise.resolve("a") },
    navigate(() => ({ show: true, p: rejectAfter(new Error("boom")) })),
    { show: true, p: Promise.resolve("c") },
  ],
};
