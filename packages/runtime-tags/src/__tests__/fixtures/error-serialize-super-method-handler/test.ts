import type { TestConfig } from "../../main.test";

// A method that reads `super` only works inside its object, so it is never
// registered; the debug serializer reports this at SSR time (production
// builds skip the check).
export const config: TestConfig = {
  error_html: true,
  equivalent: false,
  skip_optimize: true,
};
