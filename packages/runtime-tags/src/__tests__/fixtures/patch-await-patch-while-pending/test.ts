import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A patch arriving while the boundary's initial stream is still pending
// holds the body's partial until the document's body lands, then applies
// it as the body attaches: the placeholder stays up, nothing rebuilds.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { msg: "a", promise: resolveAfter(2) },
    { msg: "b", promise: resolveAfter(2) },
    wait,
    flush,
  ],
};
