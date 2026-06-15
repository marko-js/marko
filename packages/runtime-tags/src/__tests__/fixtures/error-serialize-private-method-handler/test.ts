import type { TestConfig } from "../../main.test";

// Private class methods cannot be re-created on the client; the debug
// serializer reports this at SSR time (production builds skip the check).
export const config: TestConfig = {
  error_html: true,
  equivalent: false,
  skip_optimize: true,
};
