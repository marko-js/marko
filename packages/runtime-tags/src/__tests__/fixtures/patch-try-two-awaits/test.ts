import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// Two awaits pend under one try; the fast one sits in an `<if>`, so its
// settle re-links through the branch's `PatchChild` entry.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      show: true,
      fast: Promise.resolve("f1"),
      slow: Promise.resolve("s1"),
    },
    navigate(
      () => ({
        show: true,
        fast: resolveAfter("f2", 1),
        slow: resolveAfter("s2", 3),
      }),
      () => {},
    ),
  ],
};
