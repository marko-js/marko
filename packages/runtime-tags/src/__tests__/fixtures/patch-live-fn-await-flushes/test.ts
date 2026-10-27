import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// One response, two flushes: a live function bound before an `<await>` and
// after it resolves is one function, its capture changed once (R158).
export const config: TestConfig = {
  patches: true,
  // The log is client-effect state; the client render of the same steps decides.
  skip_fresh_render: true,
  steps: () => [
    { x: 1, promise: Promise.resolve("p") },
    navigate(() => ({ x: 2, promise: resolveAfter("q") })),
  ],
};
