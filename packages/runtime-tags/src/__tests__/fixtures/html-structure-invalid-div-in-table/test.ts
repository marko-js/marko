import type { TestConfig } from "../../main.test";

// Invalid table markup is reported in MARKO_DEBUG with the template source so
// authors can find the tag the HTML parser will foster-parent. CSR builds the
// tree with createElement (no foster parenting), so SSR and CSR are not
// equivalent and the optimized build omits the warning.
export const config: TestConfig = {
  skip_optimize: true,
  equivalent: false,
};
