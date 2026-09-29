import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter, resolveAfter } from "../../utils/resolve";

// Late settles two loops deep (keyed outer, index-keyed inner), one a
// rejection into a `@catch`.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      groups: [{ id: "a", items: [{ promise: Promise.resolve("1") }] }],
    },
    navigate(() => ({
      groups: [
        { id: "b", items: [{ promise: resolveAfter("x", 1) }] },
        {
          id: "a",
          items: [
            { promise: resolveAfter("2", 2) },
            { promise: rejectAfter(new Error("nope"), 3) },
          ],
        },
      ],
    })),
  ],
};
