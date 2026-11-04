import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";
// A faster sibling await flushes before this try's server copy settles.
// Its label still pairs with the client's kept await body.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("a"), other: Promise.resolve("o1") },
    navigate(() => ({
      label: "b",
      promise: resolveAfter("b", 2),
      other: resolveAfter("o2", 1),
    })),
    wait,
  ],
};
