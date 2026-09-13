import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// A try nested inside a placeholder try: the inner boundary's registration
// must survive the optimized build, and both patch.
export const config: TestConfig = {
  persisted: true,
  steps: [{ promise: resolveAfter("a") }, { promise: resolveAfter("b") }],
};
