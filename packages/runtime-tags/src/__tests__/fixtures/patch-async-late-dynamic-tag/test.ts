import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// Late settles inside a native dynamic tag's body and inside content a child
// renders through its own dynamic tag.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { as: "div", p: Promise.resolve("1"), q: Promise.resolve("a") },
    navigate(() => ({
      as: "div",
      p: resolveAfter("2", 1),
      q: resolveAfter("b", 2),
    })),
    navigate(() => ({
      as: "section",
      p: resolveAfter("3", 1),
      q: resolveAfter("c", 2),
    })),
  ],
};
