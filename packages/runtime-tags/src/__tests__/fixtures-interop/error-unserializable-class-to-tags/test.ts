import type { TestConfig } from "../../main.test";

// Optimize builds compile out `throwUnserializable`, so they drop the function
// and render; only debug produces an error for the compat flush to surface.
export const config: TestConfig = {
  error_html: true,
  skip_optimize: true,
};
