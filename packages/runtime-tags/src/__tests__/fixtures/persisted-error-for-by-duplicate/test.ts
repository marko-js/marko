import type { TestConfig } from "../../main.test";

// A duplicate loop key is the same user error as on a plain page: the
// debug server throws it while writing the patch response.
export const config: TestConfig = {
  persisted: true,
  error_html: true,
  skip_optimize: true,
  steps: [{ items: [{ id: "a" }] }, { items: [{ id: "a" }, { id: "a" }] }],
};
