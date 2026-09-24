import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A scriptless page with an empty `@catch`: nothing for the client to
// render, so no module loads; the rejection renders nothing, as a
// document does.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    navigate(() => ({ promise: rejectAfter(new Error("boom")) })),
    { promise: Promise.resolve("back") },
  ],
};
