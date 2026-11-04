import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A placeholder try after a pending await streams behind it: its body settles
// first, so no placeholder shows.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [{ a: resolveAfter(3, 3), b: resolveAfter(4, 1) }, wait],
};
