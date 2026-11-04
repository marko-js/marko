import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A nested placeholder try after a pending await in its parent's body streams
// behind its parent's placeholder.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ a: resolveAfter(3, 2), b: resolveAfter(4, 1) }, wait],
};
