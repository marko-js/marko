import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A script inside an await under a placeholder try patches (the effect
// re-runs with the settled value) instead of rejecting.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { promise: resolveAfter("a") },
    navigate(() => ({ promise: resolveAfter("b") })),
  ],
};
