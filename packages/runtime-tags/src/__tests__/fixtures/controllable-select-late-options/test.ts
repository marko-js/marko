import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  // Debug logs the unmatched controlled `<select>` value diagnostic.
  skip_parity: true,
  steps: [{}, wait],
};
