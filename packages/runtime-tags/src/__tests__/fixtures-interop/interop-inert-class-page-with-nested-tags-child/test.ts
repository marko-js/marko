import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// An inert Class API page must stay out of the client bundle, and so must the
// inert Tags API sibling; only the interactive Tags root is linked.
export const config: TestConfig = {
  steps: [{}, click("#counter")],
};
