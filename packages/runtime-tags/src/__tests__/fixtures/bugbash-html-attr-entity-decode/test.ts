import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // SSR and CSR should agree, but the SSR attribute escaper misses
  // character references without a trailing semicolon, which browsers decode.
  equivalent: false,
  steps: [{ a: "x &amp y", b: "AT&amp", c: "&#38x" }],
};
