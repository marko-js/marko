import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A lazy child's `<try>` pending behind its `@placeholder`, its sync part
// writing nothing: its module's ready data names the `@catch` up front, so
// the held patch pairs the body rather than taking it for caught.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  equivalent: false,
  steps: () => [
    { $global: { name: "a", promise: resolveAfter("x", 2) } },
    { $global: { name: "b", promise: resolveAfter("x", 2) } },
    wait,
    flush,
  ],
};
