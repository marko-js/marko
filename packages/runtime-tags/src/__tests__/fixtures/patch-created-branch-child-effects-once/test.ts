import type { TestConfig } from "../../main.test";

// A branch a patch creates runs each setup effect of its scopes once: a composed
// child's and its inner one, a define body's, a row's, a nested branch's,
// content's and a dynamic tag body's (from its registered renderer), with the
// rows their own entries create; the branch's own reads its rows' final DOM.
export const config: TestConfig = {
  patches: true,
  steps: [{}, { show: true, items: ["a"], nested: true }],
};
