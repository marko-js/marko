import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A server value read inside `@placeholder` content must re-render with the
// patched value when a construct re-shows the placeholder, in optimize and
// debug alike (the fill registration is retained for the placeholder's read).
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
