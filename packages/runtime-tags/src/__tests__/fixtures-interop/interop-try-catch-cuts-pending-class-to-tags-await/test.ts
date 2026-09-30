import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Tags content in a Class API component is still awaiting when a Tags `@catch`
// around it fires: its await is cut with it, so nothing of it renders or runs.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, wait],
};
