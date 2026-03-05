import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, flush, flush, wait],
  skip_equivalent: true,
};
