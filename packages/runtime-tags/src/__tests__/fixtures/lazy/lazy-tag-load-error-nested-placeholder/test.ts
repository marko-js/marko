import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";

export const config: TestConfig = {
  // A failed lazy load leaves server content inert, while the client render
  // shows the catch.
  skip_settled: true,
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  steps: [{}, flush, wait, flush, wait],
  equivalent: false,
};
