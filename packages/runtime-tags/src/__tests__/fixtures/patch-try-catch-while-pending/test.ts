import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter, wait } from "../../utils/resolve";

// A patch reaching a `<try>` whose body is still pending behind its
// `@placeholder`, its sync part writing nothing, pairs the body: it has no
// `@catch` showing, so the patch's value lands once the body does.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { $global: { name: "a", promise: resolveAfter("x", 2) } },
    navigate(() => ({ $global: { name: "b", promise: resolveAfter("x", 2) } })),
    wait,
    flush,
  ],
};
