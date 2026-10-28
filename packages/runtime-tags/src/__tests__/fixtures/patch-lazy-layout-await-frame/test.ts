import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// As the layout-in-layout route switch, with an await in the lazy layout
// resolving after the first flush: its flush waits for the layout's module.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: () => [
    { page: 0 },
    navigate(() => ({ page: 1, list: resolveAfter(["x", "y"]) })),
    wait,
    navigate(() => ({ page: 2, list: resolveAfter(["z"]) })),
    wait,
    { page: 0 },
  ],
};
