import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter, wait } from "../../utils/resolve";

// An `<await>` a patch creates inside a body still streaming renders from its
// shell at once; only the resumed item's waits for the document.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { items: [{ id: "a", msg: "a", promise: resolveAfter(2) }] },
    navigate(() => ({
      items: [
        { id: "a", msg: "b", promise: resolveAfter(2) },
        { id: "c", msg: "c", promise: resolveAfter(2) },
      ],
    })),
    wait,
    flush,
  ],
};
