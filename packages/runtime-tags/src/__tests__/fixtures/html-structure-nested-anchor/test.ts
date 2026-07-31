import type { TestConfig } from "../../main.test";

// Nested anchors are restructured by the parser; debug SSR reports the site.
// CSR creates nested nodes, so the two render paths differ.
export const config: TestConfig = {
  skip_optimize: true,
  equivalent: false,
};
