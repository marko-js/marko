import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// As interop-try-catch-async-catch-class-to-tags, behind a pending Class API
// `<await>` that holds back the html carrying the markers while an earlier one
// flushes. A class `<await>` cannot render client side.
export const config: TestConfig = {
  skip_csr: true,
  steps: [{}, wait],
};
