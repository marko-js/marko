import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A `@catch` off the branch path (in a `@placeholder`), which no patch renders:
// the client renders its try from the fills and throws there itself.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { title: "a", fail: false, slow: resolveAfter("s1") },
    navigate(() => ({ title: "b", fail: true, slow: resolveAfter("s2") })),
  ],
};
