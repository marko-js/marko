import type { TestConfig } from "../../main.test";

// A text-only `<if>` inside a native element that references the enclosing
// `<for>` tag param. Flattening the conditional into a placeholder moved that
// reference, which previously left an unnamed `const = _content_resume(...)`
// in the output (invalid JS). See the regression where the build crashed.
export const config: TestConfig = {
  steps: [{}],
};
