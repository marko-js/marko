import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// An empty `@catch` renders its registered empty content: the rejection
// renders nothing, as a document does; the next flush rebuilds the body and
// creates its await anew.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    navigate(() => ({ promise: rejectAfter(new Error("boom")) })),
    { promise: Promise.resolve("back") },
  ],
};
