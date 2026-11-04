import type { TestConfig } from "../../main.test";

// A `<try>` body a flush creates mounts its own effect once, with a
// `@catch` or a `@placeholder`.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
