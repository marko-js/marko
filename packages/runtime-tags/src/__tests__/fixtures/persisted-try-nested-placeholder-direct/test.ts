import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// A placeholder try nested directly inside a placeholder try.
export const config: TestConfig = {
  persisted: true,
  steps: [{ promise: resolveAfter("a") }, { promise: resolveAfter("b") }],
};
