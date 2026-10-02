import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, flush, flush, flush],
};
