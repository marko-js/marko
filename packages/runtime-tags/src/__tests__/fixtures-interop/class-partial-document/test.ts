import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// A Class API page entry with no `<body>` has no tag to inject
// `<init-components>`, so it must serialize its own payload to resume the button.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button")],
};
