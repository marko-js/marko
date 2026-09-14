import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// As the layout-in-layout route switch, with an await in the lazy layout
// resolving after the first flush: its frame joins the layout's channel.
export const config: TestConfig = {
  persisted: true,
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
