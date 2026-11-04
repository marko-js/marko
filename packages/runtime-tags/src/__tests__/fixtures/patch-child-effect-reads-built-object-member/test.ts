import type { TestConfig } from "../../main.test";
// A child's script reading a member of an object its caller builds re-runs as the
// member's slot changes, never on a repeated input.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
