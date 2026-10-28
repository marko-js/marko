import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A placeholder try nested directly inside a placeholder try.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: resolveAfter("a") },
    navigate(() => ({ promise: resolveAfter("b") })),
  ],
};
