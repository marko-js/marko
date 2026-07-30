import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait],
  skip_optimize: true,
  equivalent: false,
};
