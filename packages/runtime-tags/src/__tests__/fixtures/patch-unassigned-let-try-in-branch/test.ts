import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// An unassigned `<let>` selects a branch with a `<try>` around an `<await>`: the branch
// stays while the promise input changes.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, promise: resolveAfter("hi") },
    { show: true, promise: resolveAfter("ho") },
  ],
};
