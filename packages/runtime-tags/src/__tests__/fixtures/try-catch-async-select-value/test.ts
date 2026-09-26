import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, flush],
  equivalent: false,
};
