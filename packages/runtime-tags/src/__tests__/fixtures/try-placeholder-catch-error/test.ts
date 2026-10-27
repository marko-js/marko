import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A `@catch` in a `@placeholder` whose body throws as it renders.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ title: "b", fail: true, slow: resolveAfter("s2") }, wait],
};
