import type { TestConfig } from "../../main.test";

// A `@catch` a patch creates mounts its child's effects before its own, as a
// client render does.
export const config: TestConfig = {
  patches: true,
  steps: [{ msg: "a" }, { fail: true, msg: "b" }],
};
