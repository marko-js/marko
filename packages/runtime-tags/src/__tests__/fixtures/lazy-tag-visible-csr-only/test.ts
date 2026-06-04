import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

// CSR-only: verify visible load works on a pure client mount via IO
// observer, with no SSR resume state involved.
export const config: TestConfig = {
  steps: [{ value: 1 }, flushVisible, wait, { value: 2 }],
  equivalent: false,
  skip_ssr: true,
};
