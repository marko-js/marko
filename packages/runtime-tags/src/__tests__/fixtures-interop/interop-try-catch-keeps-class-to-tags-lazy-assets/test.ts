import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The class content's lazy tag wrote its scripts into html the class held back
// when the catch fired; the catch's own tag writes them again.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
  skip_csr: true,
};
