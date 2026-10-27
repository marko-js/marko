import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter } from "../../utils/resolve";

// A scriptless page with an empty `@catch`: the module registering its
// empty content loads, and the rejection renders nothing, as a document
// does.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve("hi") },
    navigate(() => ({ promise: rejectAfter(new Error("boom")) })),
    { promise: Promise.resolve("back") },
  ],
};
