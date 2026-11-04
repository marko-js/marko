import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter } from "../../utils/resolve";

// Three levels of the patch's values settle in separate flushes, each waiting
// for the body the document still streams: they apply in the order they arrived.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    {
      msg: "a",
      outer: resolveAfter("o", 1),
      middle: resolveAfter("m", 2),
      inner: resolveAfter("i", 3),
    },
    navigate(settleLater),
    flush,
    flush,
    flush,
  ],
};

function settleLater() {
  return {
    msg: "b",
    outer: resolveAfter("o", 1),
    middle: resolveAfter("m", 2),
    inner: resolveAfter("i", 3),
  };
}
