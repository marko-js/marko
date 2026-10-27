import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A native dynamic tag swaps names; its body holds a pending await.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { as: "div", p: Promise.resolve("1") },
    navigate(() => ({ as: "section", p: resolveAfter("3", 1) })),
  ],
};
