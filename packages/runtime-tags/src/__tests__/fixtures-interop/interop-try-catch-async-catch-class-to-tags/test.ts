import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A Class API page's Tags API `@catch` waits on content of its own, so it streams
// out of order: its `<t>` follows the markers it replaces.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
