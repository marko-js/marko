import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Both trigger selectors are absent, so each takes the shared loader's fallback.
// The second fallback must not throw (regression for the loader return value).
export const config: TestConfig = {
  steps: [{ value: 1 }, wait],
  equivalent: false,
};
