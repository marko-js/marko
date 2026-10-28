import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// patch-async-late-dynamic-tag without patches: later inputs settle inside the
// frame's content, which stays in place while the client's `open` holds.
export const config: TestConfig = {
  equivalent: false,
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
