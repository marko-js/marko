import type { TestConfig } from "../../main.test";

// A script reading a server-fed return: the effect-write channel
// refreshes it and re-runs the reader per frame change.
export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [{ title: "a" }, { title: "a" }, { title: "b" }],
};
