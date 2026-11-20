import type { TestConfig } from "../../main.test";

// A module read's style properties are only known as it renders, so debug
// builds throw where a repeat would let one part's write drop another's.
export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
};
