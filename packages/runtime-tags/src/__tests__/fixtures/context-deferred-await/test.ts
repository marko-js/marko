import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, flush, wait],
  // Two sibling instances of one provider share the root branch, which
  // client-side (branch based) resolution cannot distinguish.
  skip_csr: true,
};
