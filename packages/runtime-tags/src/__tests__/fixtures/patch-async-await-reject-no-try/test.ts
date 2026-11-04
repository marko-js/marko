import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// An `<await>` rejecting with no `@catch` above it ends the response, as it
// ends a document: the router loads the document.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    navigate(() => ({ promise: rejectAfter(new Error("boom")) })),
  ],
};
