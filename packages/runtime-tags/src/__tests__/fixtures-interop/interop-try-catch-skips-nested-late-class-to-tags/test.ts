import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Class content nested in Tags content in Class content settles after a Tags
// `@catch` around all of it fired: none of its Tags content renders.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, wait],
};
