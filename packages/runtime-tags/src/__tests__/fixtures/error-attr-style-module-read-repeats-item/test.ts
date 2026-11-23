import type { TestConfig } from "../../main.test";

// A module read's style properties are only known as the server writes the value, so
// debug builds throw there; the client does not check.
export const config: TestConfig = {
  error_html: true,
  skip_optimize: true,
};
