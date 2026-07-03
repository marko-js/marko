import type { TestConfig } from "../../main.test";

// CSS module class values are supplied by the bundler, not this harness (which
// loads `.css` as text), so this fixture asserts on the compiled output only.
export const config: TestConfig = {
  skip_csr: true,
  skip_ssr: true,
};
