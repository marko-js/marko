import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A try nested inside a placeholder try: the inner boundary's registration
// must survive the optimized build, and both patch.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: resolveAfter("a") },
    navigate(() => ({ promise: resolveAfter("b") })),
  ],
};
