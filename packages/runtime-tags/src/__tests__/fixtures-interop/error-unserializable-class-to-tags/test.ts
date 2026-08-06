import type { TestConfig } from "../../main.test";

// The handler reaches the boundary through a member expression, so neither the
// translator nor the top-level scan registers it and the flush has an abort to
// surface; optimize drops the value and renders.
export const config: TestConfig = {
  error_html: true,
  skip_optimize: true,
};
