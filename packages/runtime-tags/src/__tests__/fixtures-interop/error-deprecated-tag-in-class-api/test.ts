import type { TestConfig } from "../../main.test";

// The deprecated `<effect>` identifies no API: with nothing else, the template
// is the Class API's, which has no `<effect>`.
export const config: TestConfig = {
  error_compiler: ["template.marko"],
};
