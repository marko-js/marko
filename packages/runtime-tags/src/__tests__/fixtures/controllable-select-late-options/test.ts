import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
