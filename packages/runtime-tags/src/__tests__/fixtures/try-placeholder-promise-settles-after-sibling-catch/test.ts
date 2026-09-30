import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The placeholder's promise serializes in a flush the sibling `<try>` body
// heads; that try catching must not drop the promise's resolution.
export const config: TestConfig = {
  // Wrapped until this agent-feedback item is fixed:
  // 2026-09-30-serialize-a-placeholder-s-promise-inside-a-parent-s-if.md
  skip_wrapped: true,
  steps: [{}, flush, flush, flush],
  equivalent: false,
};
