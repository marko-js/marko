import type { TestConfig } from "../../main.test";

// A Tags child with no `@catch` fails the Class render it streams into.
export const config: TestConfig = {
  error_html: true,
  skip_csr: true,
};
