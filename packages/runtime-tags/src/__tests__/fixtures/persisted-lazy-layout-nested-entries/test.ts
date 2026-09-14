import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// As the route switch, with pages whose own entries (a text, a branch,
// state) nest under the layout's body content; the layout module is warm
// on the later hops while each page module is still cold.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: () => [
    { page: 0 },
    { page: 1, wide: true, note: "a1", list: resolveAfter(["x", "y"]) },
    wait,
    { page: 2, wide: false, note: "b1", list: resolveAfter(["x"]) },
    wait,
    { page: 1, wide: false, note: "a2", list: resolveAfter(["z"]) },
    wait,
    { page: 0 },
  ],
};
