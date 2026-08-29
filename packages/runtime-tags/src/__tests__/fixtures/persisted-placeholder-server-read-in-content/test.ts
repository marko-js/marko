import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A server value read inside `@placeholder` content under a content section
// must re-render with the patched value when a construct re-shows the
// placeholder, in optimize and debug alike.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { msg: "a", promise: resolveAfter(2) },
    wait,
    flush,
    { msg: "b", promise: resolveAfter(2) },
    wait,
    flush,
  ],
};
