import type { TestConfig } from "../../main.test";

// Static list AND static item content: no patch can ever target the loop,
// so the marker does not resume (no wasted page bytes).
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, { title: "Store!" }],
};
