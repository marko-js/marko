import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// As interop-try-catch-drops-finished-class-to-tags, on a Class API page, whose
// own flush sends the Tags content: nothing of it flushes once the `@catch` fires.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
