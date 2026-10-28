import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter, wait } from "../../utils/resolve";

// A patch reaching an `<await>` under an inner `<try @catch>` of a body still
// streaming behind its `@placeholder` holds until the document lands it.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { msg: "a", promise: resolveAfter(2) },
    navigate(() => ({ msg: "b", promise: resolveAfter(2) })),
    wait,
    flush,
  ],
};
