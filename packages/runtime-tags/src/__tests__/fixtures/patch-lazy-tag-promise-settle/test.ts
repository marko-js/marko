import type { TestConfig } from "../../main.test";
import { navigate, release } from "../../utils/resolve";

const settleSoon = () => Promise.resolve().then(() => ({ name: "v" }));

// A response held for the lazy probe writes a promise, then settles it in a
// later flush: the settle waits behind the flush that wrote the promise.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  skip_fresh_render: true,
  hold_load: ["probe"],
  steps: () => [
    { promise: settleSoon() },
    navigate(() => ({ promise: settleSoon() })),
    release,
  ],
};
