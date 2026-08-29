import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A patch arriving while the boundary's initial stream is still pending:
// the construct's marker anchor has not streamed, so the frame rejects
// (safe fallback to navigation) — pinned until mid-stream pairing lands.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: () => [
    { msg: "a", promise: resolveAfter(2) },
    { msg: "b", promise: resolveAfter(2) },
    wait,
    flush,
  ],
};
