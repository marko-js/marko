import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const SHARED = "a-string-long-enough-to-dedup-across-the-tree-and-the-fill";
const settleSoon = (n: number) =>
  Promise.resolve().then(() => ({ name: SHARED + "-" + n }));

export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      $global: { tag: SHARED, serializedGlobals: ["tag"] },
      promise: settleSoon(0),
    },
    navigate(() => ({ promise: settleSoon(1) })),
    navigate(() => ({ promise: settleSoon(2) })),
    navigate(() => ({ promise: settleSoon(3) })),
    navigate(() => ({ promise: settleSoon(4) })),
  ],
};
