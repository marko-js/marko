import type { TestConfig } from "../../main.test";

// With two spreads a merged property could come from either, so the error
// must not name one of them; it reports the runtime-read property instead.
export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
  steps: [{ attrs: { checked: true, valueChange: () => {} }, more: {} }],
};
