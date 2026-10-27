import type { TestConfig } from "../../main.test";
// A recursive tag passing on a function it never reads: the function's capture
// still re-runs the page's script once per change.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
