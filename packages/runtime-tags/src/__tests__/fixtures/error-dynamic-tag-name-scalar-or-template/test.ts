import type { TestConfig } from "../../main.test";

// The name is `true` here, which is no tag. Staying dynamic reports it, where
// rendering the template it may also be would hide it.
export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
  steps: [{ count: 4 }],
};
