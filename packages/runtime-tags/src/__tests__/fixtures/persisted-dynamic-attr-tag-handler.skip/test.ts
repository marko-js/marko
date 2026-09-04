import type { TestConfig } from "../../main.test";

// Skipped until main registers a handler in an attr tag that a child
// renders dynamically (persisted-pages-scratch
// `handoffs/main-attr-tag-handler-registration.md`): the child's seed
// write meets the unregistered function and the render throws.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}],
};
