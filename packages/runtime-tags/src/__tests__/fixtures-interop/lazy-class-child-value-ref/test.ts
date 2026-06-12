import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The lazy wrapper pretends to be the template: usable as a tag, a
// dynamic tag, and a value (the import itself is removed in the browser).
export const config: TestConfig = {
  steps: [{}, wait],
  equivalent: false,
};
