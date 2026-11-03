import type { TestConfig } from "../../main.test";

// An attribute tag body's param read only by a function a child's effect calls:
// the tag keeping the body hands it the new value.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, { v: "b" }, { v: "b" }],
};
