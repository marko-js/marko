import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Two waits: the outer lazy (child) resolves first and triggers the inner
// lazy (grand-child); a second wait ensures both are applied.
export const config: TestConfig = {
  steps: [{ value: 1 }, wait, wait],
  equivalent: false,
};
