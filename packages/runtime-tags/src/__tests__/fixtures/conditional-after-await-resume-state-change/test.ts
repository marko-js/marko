import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The resume/streaming path renders the SSR branch first and swaps once the
// client state resolves, so its mutation log differs from the pure CSR path.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
