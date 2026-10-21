import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A class `<await>` cannot render client side.
export const config: TestConfig = {
  skip_csr: true,
  steps: [{}, wait],
};
