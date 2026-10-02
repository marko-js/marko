import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// A placeholder throws after its body wrote effects in the same pass; the
// `@catch` it fires drops them with the rest of the body.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
  skip_csr: true,
};
