import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// As interop-try-catch-drops-finished-class-to-tags, with the Tags content one
// Class API component deeper: nothing of it flushes once the `@catch` fires.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
