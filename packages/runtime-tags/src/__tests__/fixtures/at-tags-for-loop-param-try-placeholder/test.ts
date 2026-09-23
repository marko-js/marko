import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// SSR streams the placeholder; CSR inserts it on the frame after rendering.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
