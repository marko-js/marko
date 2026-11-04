import type { TestConfig } from "../../main.test";

// An object built under a type assertion: its script re-runs as the object's slot
// changes.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
