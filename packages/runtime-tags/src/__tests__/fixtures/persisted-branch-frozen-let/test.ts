import type { TestConfig } from "../../main.test";

// A never-assigned let is NOT state, so the chain stays server-owned:
// shells ship, frames speak the selection, the interior captures.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }],
};
