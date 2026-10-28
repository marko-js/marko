import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter } from "../../utils/resolve";

// A patch pairs a `<try>` inside an await body still streaming, then holds
// that try's own body until the document lands it too.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { msg: "a", outer: resolveAfter("o", 1), inner: resolveAfter("i", 2) },
    navigate(() => ({
      msg: "b",
      outer: Promise.resolve("o"),
      inner: Promise.resolve("i"),
    })),
    flush,
    flush,
  ],
};
