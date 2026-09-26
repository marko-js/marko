import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The placeholder's promise serializes in a flush the sibling `<try>` body
// heads; that try catching must not drop the promise's resolution.
export const config: TestConfig = {
  steps: [{}, flush, flush, flush],
  equivalent: false,
};
