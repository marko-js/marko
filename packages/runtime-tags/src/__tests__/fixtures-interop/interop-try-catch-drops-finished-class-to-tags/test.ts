import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A Class API component's Tags content finishes, then a sibling `<await>` rejects
// before the first flush: the `@catch` replaces both, and nothing of it flushes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
