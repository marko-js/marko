import type { TestConfig } from "../../main.test";
import { destroy } from "../../utils/resolve";

export const config: TestConfig = {
  // Only the client render has an instance to destroy.
  skip_settled: true,
  equivalent: false,
  steps: [{}, destroy],
};
