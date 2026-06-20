import type { TestConfig } from "../../main.test";

// A `<for>` tag's `by` must return a string or number to track item identity
// (and to survive SSR serialization/resume). When it returns something else
// (here `id` is `null`), both the HTML (server) and DOM (client) runtimes emit
// a `MARKO_DEBUG` `console.error`, captured under `## Console` below. The
// warning only exists in debug builds, so the optimized build is skipped.
export const config: TestConfig = {
  skip_optimize: true,
};
