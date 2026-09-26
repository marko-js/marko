import type { TestConfig } from "../../main.test";

// Compile only: debug output declares the body's walks and template before the
// `$walks` and `$template` they read, so the module throws when it loads.
export const config: TestConfig = {
  skip_csr: true,
  skip_ssr: true,
};
