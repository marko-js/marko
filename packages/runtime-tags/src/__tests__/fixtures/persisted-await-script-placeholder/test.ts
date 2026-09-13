import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// A script inside an await under a placeholder try patches (the effect
// re-runs with the settled value) instead of rejecting.
export const config: TestConfig = {
  persisted: true,
  skip_fresh_render: true,
  steps: [{ promise: resolveAfter("a") }, { promise: resolveAfter("b") }],
};
