import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A Class A load-imports B, B imports a Tags T and T imports A, entered at B.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
