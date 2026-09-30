import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A reordered `@catch`'s effect waits for the in-order content still streaming,
// though the flush also sends a Class API component's init code.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
