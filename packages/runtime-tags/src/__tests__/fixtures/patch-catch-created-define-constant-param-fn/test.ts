import type { TestConfig } from "../../main.test";

// A `@catch` a patch creates calls a `<define>` passing a constant: the
// function only a branch on it reads stays unsent, as without patches.
export const config: TestConfig = {
  patches: true,
  steps: [{}, { error: new Error("SHOWN_x") }],
};
