import type { TestConfig } from "../../main.test";

// A function passed to a child captures a value its template derives: the
// child's effect re-runs once per change of that value.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
