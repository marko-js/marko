import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const SHARED = "a-string-long-enough-to-dedup-across-the-tree-and-the-fill";
const settleSoon = () => Promise.resolve().then(() => ({ name: SHARED }));

export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      $global: { tag: SHARED, serializedGlobals: ["tag"] },
      promise: settleSoon(),
    },
    navigate(() => ({ promise: settleSoon() })),
    navigate(() => ({ promise: settleSoon() })),
  ],
};
