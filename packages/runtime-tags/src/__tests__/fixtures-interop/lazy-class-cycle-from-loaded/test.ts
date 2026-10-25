import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Class templates: A load-imports B and B imports A, entered at B: A's load
// facade reads B only as it renders.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
