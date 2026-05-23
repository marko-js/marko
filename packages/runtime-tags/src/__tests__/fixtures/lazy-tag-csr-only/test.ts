import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// CSR-only: verify lazy load works on a pure client mount, then verify
// reactivity continues working after the component is live.
export const config: TestConfig = {
  steps: [{ value: 1 }, wait, { value: 2 }],
  equivalent: false,
  skip_ssr: true,
};
