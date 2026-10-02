import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// A placeholder throws as its body's lazy tag streams; the `@catch` it fires
// drops the lazy tag's effects with the rest of the body.
export const config: TestConfig = {
  steps: [{}, flush, flush],
  equivalent: false,
  skip_csr: true,
};
