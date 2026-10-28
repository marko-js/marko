import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// A `<let>` only a handler nothing registers assigns selects a branch with an `<await>`:
// unassigned, it keeps its branch while the promise input changes.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, promise: resolveAfter("hi") },
    { show: true, promise: resolveAfter("ho") },
  ],
};
