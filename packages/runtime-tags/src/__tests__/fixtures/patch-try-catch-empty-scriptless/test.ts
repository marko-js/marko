import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A scriptless page with an empty `@catch`: the module registering its
// empty content loads, and the rejection renders nothing, as a document
// does; a patch resolving the await reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    navigate(() => ({ promise: rejectAfter(new Error("boom")) })),
    { promise: Promise.resolve("back") },
  ],
};
