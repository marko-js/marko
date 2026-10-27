import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created child's `<await>` over a `<let>` nothing assigns: the patch
// creates the body from its shell, so the child keeps no client code for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: 1 },
    { on: true, n: 2 },
    wait,
    { on: false, n: 2 },
    { on: true, n: 3 },
    wait,
  ],
};
