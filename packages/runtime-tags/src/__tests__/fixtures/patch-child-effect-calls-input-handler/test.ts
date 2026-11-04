import type { TestConfig } from "../../main.test";
// A handler-named member called in a child's script is a member read in main's
// analysis: the script re-runs as the bound function changes, never on a repeated input.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
