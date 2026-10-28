import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A later input to a live child's `<await>` over a `<let>` nothing assigns: the
// `<let>` keeps its first value, so the body stays as a client render leaves it.
export const config: TestConfig = {
  patches: true,
  // A fresh render of the later input starts the `<let>` from it.
  skip_fresh_render: true,
  steps: [
    { on: false, n: 1 },
    { on: true, n: 2 },
    wait,
    { on: true, n: 3 },
    wait,
  ],
};
