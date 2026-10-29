import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter } from "../../utils/resolve";

// The patch's values settle in separate flushes, each waiting for the body the
// document still streams: they apply in the order they arrived.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { msg: "a", outer: resolveAfter("o", 1), inner: resolveAfter("i", 2) },
    navigate(() => ({
      msg: "b",
      outer: resolveAfter("o", 1),
      inner: resolveAfter("i", 2),
    })),
    flush,
    flush,
  ],
};
