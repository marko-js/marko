import type { TestConfig } from "../../main.test";

// `out.script` is a server-only API, so this fixture exercises the
// class -> tags HTML script flushing path and skips client rendering.
export const config: TestConfig = {
  skip_csr: true,
  steps: [{}],
};
