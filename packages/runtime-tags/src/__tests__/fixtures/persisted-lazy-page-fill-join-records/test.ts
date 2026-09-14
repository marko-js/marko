import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A lazy page whose content bodies join a root fill with page state inside
// a loop: the fill's subscriber sets serialize as the page channel's ready
// record, folded into the flush's tree expression.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: () => [
    { page: 0 },
    { page: 2, note: "b1", list: resolveAfter(["x"]) },
    wait,
    { page: 1, wide: true, list: resolveAfter(["y"]) },
    wait,
    { page: 2, note: "b2", list: resolveAfter(["z"]) },
    wait,
  ],
};
