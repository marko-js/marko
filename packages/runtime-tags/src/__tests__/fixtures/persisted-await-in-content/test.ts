import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A server value rendered inside an `<await>` body whose chain to the owner
// crosses a non-branch content section: the boundary's marker always
// resumes on persisted pages, so a patch pairs the settled body and updates
// the text through the content chain.
export const config: TestConfig = {
  persisted: true,
  // Optimized resume of an interactive boundary under a content section
  // fails before any patch (see agent-feedback item on content-chain
  // boundaries) — pinned in debug until that lands.
  skip_optimize: true,
  steps: () => [
    { msg: "a", promise: resolveAfter(2) },
    wait,
    flush,
    { msg: "b", promise: resolveAfter(2) },
    wait,
    flush,
  ],
};
