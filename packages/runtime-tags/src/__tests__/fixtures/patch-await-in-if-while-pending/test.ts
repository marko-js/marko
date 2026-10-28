import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter, wait } from "../../utils/resolve";

// A patch reaching an `<await>` under an `<if>` of a body still streaming
// behind its `@placeholder` holds until the document lands it.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { show: true, msg: "a", promise: resolveAfter(2) },
    navigate(() => ({ show: true, msg: "b", promise: resolveAfter(2) })),
    wait,
    flush,
  ],
};
