import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  // An optimized load entry has no rejection arm: the browser reports the
  // failed module itself.
  unhandled_rejections: { "optimize ssr": ["Error: load failed"] },
  steps: [{}, flush, wait, flush, wait],
  equivalent: false,
};
