import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// Spreading attribute-tag attributes (`...input.foot`) drops the object, and
// attribute-tag content (`...input.head` body) resumes via the host tag's
// ConditionalRenderer on the light `_content` path. The stateful content must
// still resume and update.
export const config: TestConfig = {
  steps: [{}, click("button")],
};
