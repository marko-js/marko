import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait, flush],
  skip_equivalent: true,
};
