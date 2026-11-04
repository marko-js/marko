import type { TestConfig } from "../../main.test";
import { flush, rejectAfter, resolveAfter, wait } from "../../utils/resolve";

// The document catches the await a held patch waits on: its inner `<try>`
// keeps the `@catch`, as a client render does, and the patch applies.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  skip_fresh_render: true,
  steps: () => [
    { msg: "a", promise: rejectAfter(new Error("no"), 2) },
    { msg: "b", promise: resolveAfter(2) },
    wait,
    flush,
  ],
};
