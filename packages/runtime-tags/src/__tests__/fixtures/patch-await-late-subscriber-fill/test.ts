import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A patch fills a value while a body that reads it still streams behind a
// `@placeholder`: the body resumes with the filled value, not the stale one.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    { label: "a", promise: resolveAfter(2) },
    { label: "b", promise: resolveAfter(2) },
    wait,
    flush,
  ],
};
