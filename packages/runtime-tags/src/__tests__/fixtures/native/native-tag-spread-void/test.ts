import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// Void element pure spread: the whole input is dropped from serialization and
// re-applied from the parent on update. Toggling a reactive attr must still
// update the element after resume.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button")],
};
