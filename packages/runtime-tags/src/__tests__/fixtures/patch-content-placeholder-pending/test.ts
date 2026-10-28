import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// Content a child renders in its `@placeholder` shows the param a patch
// changes while the patch's await is still pending.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve(), note: "x" },
    { promise: resolveAfter(undefined), note: "y" },
  ],
};
