import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A patch creates a lazily loaded child's `<try>`: its `@placeholder` and
// `@catch` resolve by id once the child's module registers them.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: () => [
    { show: false },
    { show: true, p: Promise.resolve("a") },
    navigate(() => ({ show: true, p: rejectAfter(new Error("boom")) })),
    { show: true, p: Promise.resolve("c") },
  ],
};
