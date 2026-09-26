import type { TestConfig } from "../../main.test";

// Class content's scripts flush through the compat layer, which drains the
// Tags page's lazy data with them; a value that throws there aborts the render.
export const config: TestConfig = {
  error_html: true,
  skip_csr: true,
};
