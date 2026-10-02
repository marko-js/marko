import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Tags content in a Class API component renders with the `<try>` body around it:
// its effect waits for the pending body, and the `@catch` replacing it drops it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
