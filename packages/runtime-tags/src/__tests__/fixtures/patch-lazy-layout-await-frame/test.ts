import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// As the layout-in-layout route switch, with an await in the lazy layout
// resolving after the first flush: its frame waits for the layout's module.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: () => [
    { page: 0 },
    { page: 1, list: resolveAfter(["x", "y"]) },
    wait,
    { page: 2, list: resolveAfter(["z"]) },
    wait,
    { page: 0 },
  ],
};
