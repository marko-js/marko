import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";

export const config: TestConfig = {
  // Server and client ids use different prefixes.
  skip_settled: true,
  equivalent: false,
  steps: [{}, wait],
};
