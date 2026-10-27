import type { TestConfig } from "../../main.test";
import { navigate, release, resolveAfter } from "../../utils/resolve";

// Both flushes of a response wait on the lazy child's module: the settled
// await's flush reads a value the first one wrote, after that one runs.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  skip_fresh_render: true,
  hold_load: ["child"],
  steps: () => [
    { label: "a", promise: Promise.resolve("x") },
    navigate(() => ({ label: "b", promise: resolveAfter("y") })),
    release,
  ],
};
